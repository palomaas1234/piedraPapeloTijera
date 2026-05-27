"use strict";

let mensaje = "Bienvenid@";
const opciones = ["piedra", "papel", "tijera"];
let preguntaJugador = "Que opcion prefieres 'piedra' 'papel' 'tijera'";
let respuestaJugador = "";
let respuestaAplicacion = "";
let partida = 1;

alert(mensaje);

while (partida <= 3) {
    respuestaJugador = prompt("preguntaJugador");
    let numeroAleatorio = Math.floor(Math.random() * 3);
    respuestaAplicacion = opciones[numeroAleatorio];
    alert("La aplicación escogió: " + respuestaAplicacion);
    partida++;
}
