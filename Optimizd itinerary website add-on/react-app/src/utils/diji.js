//Liste des monuments

// constiable  contenant la distance de chaque monument de l'hotel et de chaque monument entre eux

//Pour chaque monument, durée moyenne passée sur place
// horaires d'ouverture du monument visité

const horaire_monument = {
  "Arc de Triomphe": [10, 21],
  "Tour Eiffel": [9, 18],
  "Cathédrale Notre-Dame de Paris": [10, 16],
};

let nb_jour = 2;
let heure_depart = 10;
let heure_retour = 18;
let duree_visite = (heure_retour - heure_depart) * 60;
let compteur_visite = 0;
let sum_visite = 0;
let list_to_visit = ["start"];
let list_visited = ["start"];

//Ajout d'un monument à la liste du jour
function Ajout_Monument(graph, list_visited, list_to_visit, temps_visite) {
  let new_element = null;
  let new_list = [];
  let time = [];
  for (let element in graph[list_to_visit[list_to_visit.length - 1]]) {
    if (
      list_visited.includes(element) === false &&
      element != "finish" &&
      element != "start"
    ) {
      new_list.push(element);
    }
  }
  for (let element in new_list) {
    time.push(
      graph[list_to_visit[list_to_visit.length - 1]][new_list[element]] +
        temps_visite[new_list[element]]
    );
  }
  let min = 100000;
  let index = -1;
  for (let element in time) {
    if (time[element] < min) {
      min = time[element];
      index = element;
    }
  }
  new_element = new_list[index];
  compteur_visite = compteur_visite + time[index];
  return new_element;
}

//Génère l'ensemble des chemins possibles du jour, lance la validation du trajet, et renvoit le trajet selectionné
const day_path = (graph, monuments, temps_visite) => {
  stop = false;
  while (stop === false) {
    let compteur = 0;
    for (const element in monuments) {
      if (list_to_visit.includes(monuments[element]) === true) {
        compteur++;
      }
    }
    if (compteur === monuments.length) {
      list_to_visit.push("finish");
      stop = true;
    }
    if (
      graph[list_to_visit[list_to_visit.length - 1]]["finish"] +
        compteur_visite >
      duree_visite
    ) {
      stop = true;
      list_to_visit.length = list_to_visit.length - 1;
      list_visited.length = list_visited.length - 1;
      list_to_visit.push("finish");
    }
    if (stop === false) {
      let nouvel_element = Ajout_Monument(
        graph,
        list_to_visit,
        list_visited,
        temps_visite
      );
      list_to_visit.push(nouvel_element);
      list_visited.push(nouvel_element);
    }
  }
  const delay_visite = [];
  const temps_transports = [];
  for (let i = 0; i < list_to_visit.length - 1; i++) {
    delay_visite.push(
      graph[list_to_visit[i]][list_to_visit[i + 1]] +
        temps_visite[list_to_visit[i + 1]]
    );
    temps_transports.push(graph[list_to_visit[i]][list_to_visit[i + 1]]);
  }
  return [list_to_visit, delay_visite, temps_transports];
};

//Renvoit l'ensemble les trajets pour l'ensemble du séjour
function calcul_path(graphStart, monumentsSelected) {
  nb_jour = 2;
  heure_depart = 10;
  heure_retour = 18;
  duree_visite = (heure_retour - heure_depart) * 60;
  compteur_visite = 0;
  sum_visite = 0;
  list_to_visit = ["start"];
  list_visited = ["start"];

  let graph = {
    start: graphStart,
    "Arc de Triomphe": {
      start: graphStart["Arc de Triomphe"],
      "Tour Eiffel": 23,
      "Cathédrale Notre-Dame de Paris": 26,
      "Musée d'Orsay": 1,
      Louvres: 1,
      "Palais Garnier": 1,
      "Jardin du Luxembourg": 1,
      finish: graphStart["Arc de Triomphe"],
    },
    "Tour Eiffel": {
      start: graphStart["Tour Eiffel"],
      "Arc de Triomphe": 23,
      "Cathédrale Notre-Dame de Paris": 36,
      "Musée d'Orsay": 1,
      Louvres: 1,
      "Palais Garnier": 1,
      "Jardin du Luxembourg": 1,
      finish: graphStart["Tour Eiffel"],
    },
    "Cathédrale Notre-Dame de Paris": {
      start: graphStart["Cathédrale Notre-Dame de Paris"],
      "Arc de Triomphe": 26,
      "Tour Eiffel": 36,
      "Musée d'Orsay": 1,
      Louvres: 1,
      "Palais Garnier": 1,
      "Jardin du Luxembourg": 1,
      finish: graphStart["Cathédrale Notre-Dame de Paris"],
    },
    "Musée d'Orsay": {
      start: graphStart["Musée d'Orsay"],
      "Arc de Triomphe": 26,
      "Tour Eiffel": 36,
      "Cathédrale Notre-Dame de Paris": 1,
      Louvres: 1,
      "Palais Garnier": 1,
      "Jardin du Luxembourg": 1,
      finish: graphStart["Musée d'Orsay"],
    },
    Louvres: {
      start: graphStart["Louvres"],
      "Arc de Triomphe": 26,
      "Tour Eiffel": 36,
      "Cathédrale Notre-Dame de Paris": 1,
      "Musée d'Orsay": 1,
      "Palais Garnier": 1,
      "Jardin du Luxembourg": 1,
      finish: graphStart["Louvres"],
    },
    "Palais Garnier": {
      start: graphStart["Palais Garnier"],
      "Arc de Triomphe": 26,
      "Tour Eiffel": 36,
      "Cathédrale Notre-Dame de Paris": 1,
      "Musée d'Orsay": 1,
      Louvres: 1,
      "Jardin du Luxembourg": 1,
      finish: graphStart["Palais Garnier"],
    },
    "Jardin du Luxembourg": {
      start: graphStart["Jardin du Luxembourg"],
      "Arc de Triomphe": 26,
      "Tour Eiffel": 36,
      "Cathédrale Notre-Dame de Paris": 1,
      "Musée d'Orsay": 1,
      Louvres: 1,
      "Palais Garnier": 1,
      finish: graphStart["Jardin du Luxembourg"],
    },
    finish: {},
  };
  const temps_visite = {
    start: 0,
    "Arc de Triomphe": 90,
    "Tour Eiffel": 210,
    "Cathédrale Notre-Dame de Paris": 60,
    "Musée d'Orsay": 120,
    Louvres: 190,
    "Palais Garnier": 60,
    "Jardin du Luxembourg": 45,
    finish: 0,
  };

  let finalGraph = {
    start: graphStart,
    finish: graphStart,
  };
  monumentsSelected.forEach((m) => {
    finalGraph[m] = {
      start: graphStart[m],
      finish: graphStart[m],
    };
  });
  monumentsSelected.forEach((m) => {
    monumentsSelected.forEach((m2) => {
      if (m !== m2) {
        finalGraph[m][m2] = graph[m][m2];
      }
    });
  });
  let finalTempsVisite = {};
  monumentsSelected.forEach((m) => {
    finalTempsVisite[m] = temps_visite[m];
  });

  const chemin = [];
  for (let i = 1; i <= nb_jour; i++) {
    chemin.push({
      key: "jour " + String(i),
      value: day_path(finalGraph, monumentsSelected, finalTempsVisite),
    });
    list_to_visit = ["start"];
    compteur_visite = 0;
  }
  return chemin;
}

export { calcul_path };
