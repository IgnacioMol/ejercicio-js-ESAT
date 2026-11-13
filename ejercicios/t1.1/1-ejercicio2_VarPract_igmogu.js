const localName = 'Pizzería Rodofasio';
const margPrice = 9;
let orderNum = 0;
let deliveryLocation = 'En la pizzería';

orderNum++;
deliveryLocation = 'En camino';

console.log(`${localName}: ${orderNum} pedido, repartidor ${deliveryLocation}`);