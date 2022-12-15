console.log('debut');
//Liste des monuments
var monuments=['start','ARC DE TRIOMPHE','TOUR EIFFEL','NOTRE DAME','finish'];
// variable  contenant la distance de chaque monument de l'hotel et de chaque monument entre eux
let graph = {
	'start': { "ARC DE TRIOMPHE": 13, "TOUR EIFFEL": 18 ,"NOTRE DAME":27},
	"ARC DE TRIOMPHE": { 'start': 13, "TOUR EIFFEL": 23, "NOTRE DAME": 26 ,'finish':13},
	"TOUR EIFFEL": {'start':18 ,"ARC DE TRIOMPHE": 23, "NOTRE DAME": 36,'finish':18 },
	"NOTRE DAME": { 'start':27,"ARC DE TRIOMPHE":26,"TOUR EIFFEL": 36, 'finish': 27 },
	'finish': {},
};

//Pour chaque monument, durée moyenne passée sur place
let duree_visite={
    'start':0,
    "ARC DE TRIOMPHE":90,
    "TOUR EIFFEL":210,
    "NOTRE DAME":60,
    'end':0
};
// horaires d'ouverture du monument visité
let horaire_monument={
    "ARC DE TRIOMPHE":[10,21],
    "TOUR EIFFEL":[9,18],
    "NOTRE DAME":[10,16]
};

//check validité et sélection du trajet
let verrif_path=()=>{
    a=1+1;
};
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
};
//Génère l'ensemble des chemins possibles du jour, lance la validation du trajet, et renvoit le trajet selectionné
let day_path=(graph,start,end)=>{
    var delay_visite=[];
    var temps_transports=[];
    var dico=[];
    dico.push(monuments)
    for(var i=1;i<monuments.length*monuments.length;i++){
        value=false;
        while(value!=true){
            var tempo=[]
            for(var j=0;j<monuments.length;j++){
                nb=getRandomIntInclusive(0,monuments.length-1);
                tempo.push(monuments[nb])
            };
            
            for(var k=0;k<dico.length;k++){
                if(tempo==dico[k]){
                    value=true;
                };
            };
            for(var a=0;a<tempo.length;a++){
                for(var b=0;b<tempo.length;b++){
                    if(a!=b){
                        if(tempo[a]==tempo[b]){
                            value=true;
                        };
                    };
                };
            };
            if(value==true){
                value=false;
            };
            if(value==false){
                value=true;
            };
        };
        dico.push(tempo)
    };
    /*
    for (var i=0;i<dico.length;i++){
        console.log(dico[i])
    };*/
    for(var i=0;i<dico[0].length-1;i++){
        delay_visite.push(graph[dico[0][i]][dico[0][i+1]]+duree_visite[dico[0][i]])
        temps_transports.push(graph[dico[0][i]][dico[0][i+1]])
    };
    return [dico[0], delay_visite,temps_transports] ;
};

//Renvoit l'ensemble les trajets pour l'ensemble du séjour
function calcul_path(graph,start,end,nb_jour=1,heure_depart=10,heure_retour=18){
    let duree_visite=(heure_retour-heure_depart)*60;
    var chemin=[]; 
    for(var i=1;i<=nb_jour;i++){ 
        chemin.push({
            key:"jour "+String(i),
            value:day_path(graph,start,end)
        });
        console.log(chemin[0].value)
        console.log(chemin[0].value[0])
        console.log(chemin[0].value[1])
        console.log(chemin[0].value[2])
    } 
    return chemin;
};

//On lance l'algorithme de calcul d'itinéraire pour le trajet
calcul_path(graph,"debut","fin");

console.log("fin");