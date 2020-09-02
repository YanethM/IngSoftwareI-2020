"use strict";
const retirarDineroCajero = (montoRetirar) => {
    let saldoActual = 500000;
    return new Promise((resolve, reject) => {
        if (montoRetirar > saldoActual)
            reject(`Fondos insuficientes para realizar el retiro`);
        else {
            saldoActual -= montoRetirar;
            resolve(saldoActual);
        }
    });
};
retirarDineroCajero(550000)
    .then(mensaje => console.log(`Nuevo saldo disponible ${mensaje}`))
    .catch(console.warn);
/* Con operador ternario */
const retirarDineroCajeroO = (montoRetirar) => {
    let saldoActual = 500000;
    let nuevoSaldo = saldoActual - montoRetirar;
    return new Promise((resolve, reject) => (montoRetirar > saldoActual) ?
        reject(`Saldo insuficiente`) : resolve(nuevoSaldo));
};
retirarDineroCajeroO(30000)
    .then(mensaje => console.log(`Nuevo saldo disponible ${mensaje}`))
    .catch(console.warn);
