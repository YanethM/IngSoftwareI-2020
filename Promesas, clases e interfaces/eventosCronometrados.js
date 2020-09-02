"use strict";
/* lowerCamelCase y UpperCamelCase
setTimeout(function, tiempo(ms)) */
/* Estructura: Función anónima */
/* setTimeout(function(){
    alert('Ing software 1');
}, 5000);

setTimeout(function(){alert('UAM');},3000); */
/* Estructura: Función flecha */
/* setTimeout(() => {alert('Miércoles')}, 4000);
setTimeout(() => alert('2:00 PM'), 4000); */
function mostrarMensajeEspera() {
    alert('Bienvenido, gracias por esperar 4 seg');
}
function mensajeFrecuente() {
    let horaActual = new Date();
    console.log(`${horaActual.toLocaleTimeString()}`);
}
