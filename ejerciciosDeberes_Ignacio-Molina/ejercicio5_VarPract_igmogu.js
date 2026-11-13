let floor = 0;
let lastFloor;
let floorCount = 0;

const firstMovement = 4;
const secondMovement = -2;
const thirdMovement = 5;

lastFloor = floor;
floor += firstMovement;
floorCount += Math.abs(firstMovement);

lastFloor = floor;
floor += secondMovement;
floorCount += Math.abs(secondMovement);

lastFloor = floor;
floor += thirdMovement;
floorCount += Math.abs(thirdMovement);

console.log(`Planta actual: ${floor}
Planta anterior: ${lastFloor}
Plantas recorridas: ${floorCount}`)
