/* Codigo original:
let totalPrice;
const pricePerTicket = 8;
const numTickets = 3;
const popcornPrice = 5;

console.log(`Total: ${totalPrice} €`); <-- Para que este fragmento se ejecute, se debe poner DESPUES de la declaración
                                           de su variable y no antes

const finalPrice = pricePerTicket * numTickets;
finalPrice = finalPrice + popcornPrice; <-- Para poder modificar este valor, su declaracion debe hacerse con 'let' en lugar de 'const'
totalPrice = finalPrice;
*/

//Corrección:

let totalPrice;
const pricePerTicket = 8;
const numTickets = 3;
const popcornPrice = 5;

let finalPrice = pricePerTicket * numTickets;
finalPrice = finalPrice + popcornPrice;
totalPrice = finalPrice;

console.log(`Total: ${totalPrice} €`);