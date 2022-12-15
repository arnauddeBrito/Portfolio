
//Liste des monuments
monuments = ["start", "ARC DE TRIOMPHE", "TOUR EIFFEL", "NOTRE DAME"];
// variable  contenant la distance de chaque monument de l'hotel et de chaque monument entre eux
graph = {
    "start": {
      "ARC DE TRIOMPHE": 13,
      "TOUR EIFFEL": 18,
      "NOTRE DAME": 27,
      "finish":0
    },
    "ARC DE TRIOMPHE": {
      "start": 13,
      "TOUR EIFFEL": 23,
      "NOTRE DAME": 26,
      "finish": 13
    },
    "TOUR EIFFEL": {
      "start": 18,
      "ARC DE TRIOMPHE": 23,
      "NOTRE DAME": 36,
      "finish": 18
    },
    "NOTRE DAME": {
      "start": 27,
      "ARC DE TRIOMPHE": 26,
      "TOUR EIFFEL": 36,
      "finish": 27
    },
    "finish": {}
  };


//Pour chaque monument, durée moyenne passée sur place
temps_visite = {
    "start": 0,
    "ARC DE TRIOMPHE": 90,
    "TOUR EIFFEL": 210,
    "NOTRE DAME": 60,
    "finish": 0
  };
// horaires d'ouverture du monument visité
horaire_monument = {
    "ARC DE TRIOMPHE": [10, 21],
    "TOUR EIFFEL": [9, 18],
    "NOTRE DAME": [10, 16]
  };

  nb_jour = 2;
  heure_depart = 15;
  heure_retour = 18;
  duree_visite = (heure_retour - heure_depart) * 60;
  compteur_visite=0;
  sum_visite=0;
  list_to_visit = ["start"];
  list_visited = ["start"];

//Ajout d'un monument à la liste du jour
function Ajout_Monument(list_visited,list_to_visit){
    var new_element;
    new_list=[];
    time=[]
    for(element in graph[list_to_visit[list_to_visit.length-1]]){
      if(list_visited.includes(element)===false&&element!="finish"&&element!="start")
      {
          new_list.push(element);
      };
    };
    for(element in new_list){
      time.push(graph[list_to_visit[list_to_visit.length-1]][new_list[element]]+temps_visite[new_list[element]]);
    };
    min=100000;
    index=-1;
    for(element in time){
      if(time[element]<min){
        min=time[element];
        index=element
      };
    };
    new_element=new_list[index];
    compteur_visite=compteur_visite+time[index];
    return new_element;
};

//Génère l'ensemble des chemins possibles du jour, lance la validation du trajet, et renvoit le trajet selectionné
let day_path=()=>{
    stop=false;
while(stop===false){
    compteur=0;
  for(element in monuments){
    if(list_to_visit.includes(monuments[element])===true){
      compteur++;
    };
  };
  if(compteur===monuments.length){
    list_to_visit.push("finish");
    stop=true;
  };
  if(graph[list_to_visit[list_to_visit.length-1]]["finish"]+compteur_visite>duree_visite){
    stop=true;
    list_to_visit.length=list_to_visit.length-1;
    list_visited.length=list_visited.length-1;
    list_to_visit.push("finish");
  };
  if(stop===false)
  {
    nouvel_element=Ajout_Monument(list_to_visit,list_visited);
    list_to_visit.push(nouvel_element);
    list_visited.push(nouvel_element);
  };

};
    var delay_visite=[];
    var temps_transports=[];
    for(var i=0;i<list_to_visit.length-1;i++){
        delay_visite.push(graph[list_to_visit[i]][list_to_visit[i+1]]+temps_visite[list_to_visit[i+1]]);
        temps_transports.push(graph[list_to_visit[i]][list_to_visit[i+1]]);
    };
    return [list_to_visit, delay_visite,temps_transports] ;
};

//Renvoit l'ensemble les trajets pour l'ensemble du séjour
function calcul_path(){
    var chemin=[]; 
    for(var i=1;i<=nb_jour;i++){ 
        chemin.push({
            key:"jour "+String(i),
            value:day_path()
        });
        list_to_visit=["start"];
        compteur_visite=0;
    } 
    return chemin;
};

//On lance l'algorithme de calcul d'itinéraire pour le trajet
path=calcul_path();
console.log(path[0].value);
console.log(path[1].value);
