"use_scrict";


let mensaje="Bienvenid@";
const opciones=["piedra", "papel", "tijeras"];
let puntuaciónJugador=" ";
let preguntaJugador=prompt("Que opcion prefieres 'piedra' 'papel' 'tijera'");
let respuestaJugador=" ";
let respuestaAplicacion="";

while(respuestaJugador!=respuestaAplicacion){
    if((respuestaJugador=="piedra")&&(respuestaAplicacion=="papel")){
     missatge="Ha ganado la aplicacion, suma 1 punto";
 }else if((respuestaJugador=="piedra")&&(respuestaAplicacion=="tijera")){
     missatge="Ha ganado el jugador, suma 1 punto";
 }else if((respuestaJugador=="Papel")&&(respuestaAplicacion=="Piedra")){
     missatge="Ha ganado el jugador, suma 1 punto";
 }else if((respuestaJugador=="Papel")&&(respuestaAplicacion=="Tijera")){
     missatge="Ha ganado la aplicacion, suma 1 punto";
 }else if((respuestaJugador=="Tijera")&&(respuestaAplicacion=="Piedra")){
     missatge="Ha ganado la aplicacion, suma 1 punto";
 }else if((respuestaJugador=="Tijera")&&(respuestaAplicacion=="Papel")){
     missatge="Ha ganado el jugador, suma 1 punto";
 }
    
 missatge="Habeis hecho un empate";   
    
}
 
    alert(missatge);
 

let puntuacion=prompt("A llegado alguien a 3 puntos? 'Si', 'No'");

while(puntuacion!='Si'){
    missatge="Habra que jugar otra vez";
}
