import { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import axios from "axios";
import jsPDF from "jspdf";
import domtoimage from "dom-to-image";

import User_form from "../components/User_form";
import Preferences from "../components/Preferences";

import { calcul_path } from "../utils/diji";

import banner from "../assets/banner.jpg";

const Home = () => {
  const [dateArrivee, setDateArrivee] = useState(undefined);
  const [dateDepart, setDateDepart] = useState(undefined);
  const [preference, setPreference] = useState([
    { value: "Incontournable", label: "Incontournable" },
  ]);
  const [monuments, setMonuments] = useState([]);
  const [calcul, setCalcul] = useState([]);
  const [coordonnees, setCoordonnees] = useState({
    latitude: "48.8481547",
    longitude: "2.329724",
  });
  const mapRef = useRef();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/monuments")
      .then((data) => setMonuments(data.data));
  }, []);

  const calculate = async () => {
    const start = {};
    const selectedMonuments = filterMonuments(monuments);
    for (const monument of selectedMonuments) {
      const res = (
        await axios.get("http://localhost:3001/api/citymapper", {
          params: {
            start: `${coordonnees.latitude},${coordonnees.longitude}`,
            end: `${monument.latitude},${monument.longitude}`,
          },
        })
      ).data;
      start[monument.nom] = res.transit_time_minutes;
    }

    start["finish"] = 0;

    setCalcul(
      calcul_path(
        start,
        selectedMonuments.map((m) => m.nom)
      )
    );
  };

  const filterMonuments = (monuments) => {
    return monuments.filter((monument) =>
      preference.map((p) => p.value).includes(monument.type)
    );
  };

  const handleChangeCoord = (e) => {
    setCalcul([]);
    setCoordonnees({ ...coordonnees, [e.target.name]: e.target.value });
  };

  const createPdf = async () => {
    const doc = new jsPDF();
    doc.text("Votre séjour à Paris !", 20, 20);
    const imgData = await domtoimage.toPng(
      document.querySelector(".leaflet-container")
    );
    doc.addImage(imgData, "JPEG", 15, 25, 200, 120);
    let y = 90;
    calcul[0].value[0].forEach((name, i) => {
      const monument = monuments.find((monument) => monument.nom === name);
      if (!monument) return;
      y = y + 18;
      doc.text(`${i}. ${monument.nom}`, 25, y);
      doc.text(
        `Temps de trajet : ${monument.temps_visite_minutes}min`,
        33,
        y + 8
      );
    });
    doc.save("Vos visites.pdf");
  };

  const getPolyline = () => {
    const polyline = [];
    polyline.push([coordonnees.latitude, coordonnees.longitude]);

    calcul[0].value[0].forEach((name) => {
      const monument = monuments.find((monument) => monument.nom === name);
      if (!monument) return;
      polyline.push([monument.latitude, monument.longitude]);
    });
    return polyline;
  };

  return (
    <div className="grid gap-3">
      <h1 className="text-5xl">Mon trajet à Paris</h1>
      <img
        src={banner}
        alt=""
        className="object-cover h-40 w-full mt-4"
        style={{
          objectPosition: "50% 70%",
        }}
      />
      <div className="grid grid-cols-3 gap-16 mt-8">
        <p className="bg-[#84746a] text-white rounded-md p-8">
          <span className="font-bold">
            Bienvenue sur votre nouvel outil de planification de séjour à Paris
            !
          </span>
          <br />
          <br />
          Cet outil, encore en version beta, vous permettra de planifier de
          manière totalement personnalisée votre prochain passage dans la
          capitale.
          <br />
          Pour cela, rien de plus simple. Renseignez les coordonnées de votre
          logement, vos dates de séjour, ainsi que vos centre d'intérêts. Vous
          obtiendrez alors un itinéraire personnalisé, avec les monuments à
          visiter, et le temps de trajet entre chaque étape.
        </p>
        <div className="col-span-2 grid gap-4">
          <div>
            <p className="text-2xl font-bold">Vos préférences</p>
            <p className="text-lg">
              Veuillez renseigner les spécificités de votre séjour à Paris ainsi
              que vos centres d'intérêts.
            </p>
          </div>
          <div>
            <p className="mb-2">
              Sélectionner le type d'activités que vous souhaitez faire
            </p>
            <Preferences onChange={setPreference} preference={preference} />
          </div>
          <div className="flex gap-4 mt-4 items-center">
            <User_form
              onChange={setDateArrivee}
              date={dateArrivee}
              text="Date d'arrivée"
            />
            <User_form
              onChange={setDateDepart}
              date={dateDepart}
              text="Date de départ"
            />
          </div>
          <div className="mt-4">
            <p className="mb-2">
              Entrer la latitude et longitude de votre logement :
            </p>
            <input
              type="text"
              placeholder="Latitude (48.8481547)"
              name="latitude"
              onChange={handleChangeCoord}
              className="mr-2 border border-gray-300 rounded-md shadow-sm px-2 py-1"
            />
            <input
              type="text"
              placeholder="Longitude (2.329724)"
              name="longitude"
              onChange={handleChangeCoord}
              className="border border-gray-300 rounded-md shadow-sm px-2 py-1"
            />
          </div>
          <div className="flex justify-end mt-2">
            <button
              onClick={calculate}
              className="bg-green-500 text-lg hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Calculer mon itinéraire personnalisé
            </button>
          </div>
        </div>
      </div>
      <hr className="mt-8" />
      {calcul.length > 0 && (
        <div>
          <h2 className="text-4xl font-bold mb-8 mt-12 text-center">
            Votre itinéraire personnalisé
          </h2>
          <MapContainer
            center={[48.8481547, 2.329724]}
            zoom={12}
            style={{ height: "400px", width: "100%" }}
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[coordonnees.latitude, coordonnees.longitude]}>
              <Popup>Point de départ</Popup>
            </Marker>
            {calcul[0].value[0]
              .map((name) => {
                const monument = monuments.find(
                  (monument) => monument.nom === name
                );
                return monument;
              })
              .filter((monument) => monument !== undefined && monument !== null)
              .map((monument) => (
                <Marker
                  key={monument.id}
                  position={[monument.latitude, monument.longitude]}
                >
                  <Popup>{monument.nom}</Popup>
                </Marker>
              ))}
            <Polyline
              pathOptions={{ color: "red" }}
              positions={getPolyline()}
            />
          </MapContainer>
          <div className="grid grid-cols-5 mt-10">
            <ul className="list-decimal mx-8 col-span-3">
              {calcul[0].value[0].map((name) => {
                const monument = monuments.find(
                  (monument) => monument.nom === name
                );
                if (!monument) return <div key={name}></div>;
                return (
                  <li key={monument.id} className="mb-2 text-xl">
                    {monument.nom}
                    <p className="ml-3">
                      Temps de visite : {monument.temps_visite_minutes}min
                    </p>
                  </li>
                );
              })}
            </ul>
            <div className="border-2 col-span-2 border-orange-500 rounded-2xl p-8">
              <p>
                Vous souhaitez sauvegarder votre trajet pour plus tard ?
                <br />
                Sauvergardez votre recherche sous forme d'un document PDF pour
                l'avoir toujours à portée de main !
              </p>
              <div className="flex h-[35%]">
                <button
                  onClick={createPdf}
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded m-auto"
                >
                  Sauvergarder le PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
