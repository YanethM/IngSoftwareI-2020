"use strict";
/* resolve devuelve un valor, si no se especifica el tipo será unknow */
const promesaAsync = new Promise((resolve) => {
    setTimeout(() => resolve('Se ejecuto éxitosamente la promesa'), 1000);
});
promesaAsync.then(mensaje => console.log(mensaje));
/* Promesa rechazada */
const promesaRejectAsync = new Promise((resolve, reject) => {
    setTimeout(() => reject('Error'), 1000);
});
promesaRejectAsync.catch(err => console.warn(err));
