// Apartado 1
let shelfA = 'Libros';
let shelfB = 'Discos';

let shelfAux = '';

shelfAux = shelfA;
shelfA = shelfB;
shelfB = shelfAux;

console.log(`${shelfA} ${shelfB}`);

//Apartado 2
let unitPrice = 12.5;
let quantity = 3
const discount = 5;

let subtotal = unitPrice * quantity;
let total = subtotal - discount;

console.log(`Subtotal: ${subtotal}`);
console.log(`Total: ${total}`);

