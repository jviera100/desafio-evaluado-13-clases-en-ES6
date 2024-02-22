import Cliente from './cliente.mjs';
import Impuesto from './impuesto.mjs';

const impuesto = new Impuesto(1000000, 200000);
const cliente = new Cliente('Juan', impuesto);

console.log(cliente.calcularImpuesto());

// document.getElementById('resultado').innerText = `El impuesto calculado para el cliente ${cliente.nombre} es ${cliente.calcularImpuesto()}`;
console.log(`El impuesto calculado para el cliente ${cliente.nombre} es ${cliente.calcularImpuesto()}`)