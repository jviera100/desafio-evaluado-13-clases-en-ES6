import Cliente from './cliente.js';
import Impuesto from './impuesto.js';

const impuesto = new Impuesto(1000000, 200000);
const cliente = new Cliente('Juan', impuesto);

console.log(cliente.calcularImpuesto());

document.getElementById('resultado').innerText = `El impuesto calculado para el cliente ${cliente.nombre} es ${cliente.calcularImpuesto()}`;
