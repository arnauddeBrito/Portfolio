import React from "react";

import tripadvisor_logo from "../../assets/tripadvisor_logo.svg";

const categories = [
  {
    title: "À propos de Tripadvisor",
    links: [
      "À propos de Tripadvisor",
      "Presse",
      "Ressources et règlements",
      "Emplois",
      "Confiance et sécurité",
      "Fonctionnement du site",
      "Contactez-nous",
      "Politique d'accessibilité",
    ],
  },
  {
    title: "Explorez",
    links: [
      "Écrire un avis",
      "Ajouter un lieu",
      "S'inscrire ",
      "Travellers' Choice",
      "ÉcoLeaders",
      "Assistance",
      "Articles voyage",
    ],
  },
  {
    title: "Utilisez nos solutions",
    links: [
      "Propriétaires",
      "Avantage business",
      "Résultats sponsorisés",
      "Faites votre publicité avec nous",
      "Accéder à notre API de contenu",
      "S'affilier",
    ],
  },
  {
    title: "Télécharger l'appli",
    links: ["Application iPhone", "Application Android"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#faf1ed] px-3 py-6">
      <div className="grid grid-cols-5 container mx-auto md:px-20">
        <div>
          <Title>{categories[0].title}</Title>
          <ul>
            {categories[0].links.map((l, i) => (
              <ListItem key={i}>{l}</ListItem>
            ))}
          </ul>
        </div>
        <div>
          <Title>{categories[1].title}</Title>
          <ul>
            {categories[1].links.map((l, i) => (
              <ListItem key={i}>{l}</ListItem>
            ))}
          </ul>
        </div>
        <div>
          <Title>{categories[2].title}</Title>
          <ul>
            {categories[2].links.map((l, i) => (
              <ListItem key={i}>{l}</ListItem>
            ))}
          </ul>
          <Title>{categories[3].title}</Title>
          <ul>
            {categories[3].links.map((l, i) => (
              <ListItem key={i}>{l}</ListItem>
            ))}
          </ul>
        </div>
        <div className="col-span-2">
          <Title>Sites Tripadvisor</Title>
          <p className="text-sm font-light text-stone-600">
            Réservez les meilleures tables avec{" "}
            <span className="font-bold text-gray-900">TheFork</span>
          </p>
          <p className="text-sm font-light text-stone-600">
            Réservez vos visites guidées et activités sur{" "}
            <span className="font-bold text-gray-900">Viator</span>
          </p>
        </div>
        <div className="col-span-3 ">
          <div className="flex gap-3">
            <img src={tripadvisor_logo} alt="logo" className="h-10" />
            <div>
              <p className="text-xs text-gray-500">
                © 2022 Tripadvisor LLC Tous droits réservés.
              </p>
              <div className="flex flex-wrap gap-x-2">
                <p className="text-sm whitespace-nowrap underline font-semibold">
                  Conditions d'utilisation
                </p>
                <p className="text-sm whitespace-nowrap underline font-semibold">
                  Confidentialité et utilisation des cookies
                </p>
                <p className="text-sm whitespace-nowrap underline font-semibold">
                  Accord d'utilisation des cookies
                </p>
                <p className="text-sm whitespace-nowrap underline font-semibold">
                  Plan du site
                </p>
                <p className="text-sm whitespace-nowrap underline font-semibold">
                  Fonctionnement du site
                </p>
                <p className="text-sm whitespace-nowrap underline font-semibold">
                  Contactez-nous
                </p>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            Cette version de notre site internet s'adresse aux personnes parlant
            français en France. Si vous habitez un autre pays ou une autre
            région, merci de choisir la version de Tripadvisor appropriée pour
            votre pays ou région dans le menu déroulant.{" "}
            <span className="font-bold text-gray-900">plus</span>
          </p>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-2">
            <button className="flex items-center bg-white border-2 border-gray-200 rounded-xl px-2 py-1">
              <span className="font-bold">€ EUR</span>
              <svg
                viewBox="0 0 24 24"
                width="20px"
                height="20px"
                className="ml-auto"
              >
                <path d="M19.324 9.175l-6.8 6.6c-.3.301-.7.301-1 0l-6.8-6.6c-.3-.3-.3-.7 0-1 .1-.101.3-.2.5-.2h13.6c.4 0 .7.3.7.7 0 .2-.1.399-.2.5z"></path>
              </svg>
            </button>
            <button className="flex items-center bg-white border-2 border-gray-200 rounded-xl px-2 py-1">
              <span className="font-bold">France</span>
              <svg
                viewBox="0 0 24 24"
                width="20px"
                height="20px"
                className="ml-auto"
              >
                <path d="M19.324 9.175l-6.8 6.6c-.3.301-.7.301-1 0l-6.8-6.6c-.3-.3-.3-.7 0-1 .1-.101.3-.2.5-.2h13.6c.4 0 .7.3.7.7 0 .2-.1.399-.2.5z"></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-end gap-3 mt-3">
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              className="d Vb UmNoP"
            >
              <path d="M12.001 2.061C6.478 2.061 2 6.537 2 12.061c0 4.993 3.661 9.132 8.445 9.879v-6.99H7.89v-2.889h2.556l.001-2.203c0-2.506 1.484-3.896 3.769-3.896 1.095 0 2.23.21 2.23.21v2.445h-1.253c-1.242 0-1.639.777-1.639 1.568l.003 1.876h2.777l-.444 2.889h-2.333v6.99C18.34 21.192 22 17.054 22 12.061c0-5.524-4.477-10-9.999-10z"></path>
            </svg>
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              className="d Vb UmNoP"
            >
              <path d="M2 18.1c2.2.2 4.3-.5 5.9-1.899-1.2-.101-3.6-2.4-4-2.9h1.6c-1.9-.5-3.2-2.2-3.2-4.1.6.099 1.2.299 1.7.499h.2C2.7 8.3 2.2 6 3.1 4.1c2.1 2.6 5.3 4.2 8.6 4.4V7.4c.1-2.2 2-4 4.2-4 .9 0 1.7.3 2.4.8.4.3.8.3 1.2.2l1.9-.7c-.4.9-.9 1.6-1.6 2.3.601-.1 1.3-.4 1.9-.5l.3.2c-.6.5-1.2 1.1-1.7 1.5-.1.3-.2.7-.2 1.1 0 1.9-.5 3.8-1.3 5.601A11.982 11.982 0 019.5 20.1c-2.4.2-4.9-.199-7-1.3l-.5-.7"></path>
            </svg>
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              className="d Vb UmNoP"
            >
              <path d="M21.938 7.9c0-.8-.199-1.6-.5-2.4-.5-1.4-1.5-2.5-2.9-3-.799-.3-1.6-.4-2.4-.5h-4.099c-1.4 0-2.8 0-4.2.1-.8 0-1.6.2-2.3.5-1.3.5-2.4 1.5-2.9 2.8-.3.8-.5 1.6-.5 2.5 0 1.1-.1 1.4-.1 4.1-.1 1.4-.1 2.7 0 4.1 0 .801.2 1.601.5 2.4.5 1.3 1.6 2.4 2.9 2.9.8.3 1.6.399 2.4.5 1.4.1 2.8.1 4.2.1s2.8 0 4.099-.1c.801 0 1.602-.2 2.4-.5a5.17 5.17 0 002.9-2.9c.301-.8.398-1.6.5-2.4 0-1.1.1-1.399.1-4.1s-.1-3.1-.1-4.1zM20.137 16c0 .6-.1 1.3-.299 1.9-.301.898-1 1.6-1.9 1.898-.6.201-1.301.301-1.9.301-1.1 0-1.4.102-4 .102-1.3 0-2.7 0-4-.102-.6 0-1.2-.1-1.9-.3-.9-.3-1.6-1-1.9-1.899-.3-.601-.4-1.2-.4-1.9 0-1.1-.1-1.4-.1-4 0-1.3 0-2.7.1-4 .1-.6.2-1.3.3-1.9.3-.9 1-1.6 1.9-1.9.7-.2 1.3-.3 2-.3 1.1 0 1.4-.1 4-.1 1.3 0 2.701 0 4 .1.6 0 1.301.1 1.9.3.898.3 1.6 1 1.898 1.9.201.6.301 1.3.301 1.9 0 1.1.102 1.4.102 4-.001 2.6-.102 3-.102 4z"></path>
              <path d="M12.138 6.9c-2.9 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1 5.101-2.3 5.101-5.1-2.301-5.1-5.101-5.1zm0 8.4c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3c1.8 0 3.2 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zM17.438 5.5c-.699 0-1.199.5-1.199 1.2s.5 1.2 1.199 1.2 1.199-.5 1.199-1.2-.5-1.2-1.199-1.2z"></path>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Title = ({ children }) => (
  <h3 className="font-light text-stone-600 mt-2">{children}</h3>
);
const ListItem = ({ children }) => (
  <li className="text-sm font-semibold my-1 cursor-pointer hover:underline hover:text-gray-700">
    {children}
  </li>
);

export default Footer;
