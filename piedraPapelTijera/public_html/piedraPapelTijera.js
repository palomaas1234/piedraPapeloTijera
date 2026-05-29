
"use_strict";

let mensaje="Bienvenid@";
const opciones=["piedra", "papel", "tijera"];
let preguntaAplicacion="Que opcion prefieres 'pidrea' 'papel' 'tijera'";
let puntuacionAplicacion=" ";
let respuestaAplicacion=" ";
let puntuacionJugador=" ";
let preguntaJugador="Que opcion prefieres 'pidrea' 'papel' 'tijera'";
let respuestaJugador=" ";

alert(mensaje);

while (puntuacionJugador <3&&puntuacionAplicacion< 3) {
    respuestaJugador = prompt(preguntaJugador);
    let numeroAleatorio = Math.floor(Math.random() * 3);
    respuestaAplicacion = opciones[numeroAleatorio];
    alert("La aplicación ha elegido: " + respuestaAplicacion);
    
    if (respuestaJugador == respuestaAplicacion) {
        alert("Empate");
    } else if (
        (respuestaJugador=="piedra"&&respuestaAplicacion=="tijera") ||
        (respuestaJugador=="papel"&&respuestaAplicacion=="piedra") ||
        (respuestaJugador=="tijera"&&respuestaAplicacion=="papel"))
     {
if(respuestaJugador!== "piedra", "papel", "tijera"){
    alert("Esta opción no exiaste");
}
        puntuacionJugador++;
        alert("Has ganado la ronda");
    } else {
        puntuacionAplicacion++;
        alert("La aplicación ha ganado la ronda");
    }
    alert("Jugador: " + puntuacionJugador +
        "\nAplicación: " + puntuacionAplicacion);

}
if (puntuacionJugador==3) {
    alert("Has ganado el juego");
} else {
    alert("La aplicación ganó el juego");
}

