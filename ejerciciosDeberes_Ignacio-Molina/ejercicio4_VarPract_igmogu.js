//Receta abuela para 4 personas
//Ingredientes
let eggNum = 6;
let potatoNum = 4;
let onionNum = 1;

const eggUnit = eggNum / 4;
const potatoUnit = potatoNum / 4;
const OnionUnit = onionNum / 4;

let peopleNum = 10;

console.log(`Para ${peopleNum} personas: 
${eggUnit * peopleNum} huevos
${potatoUnit * peopleNum} patatas
${OnionUnit * peopleNum} cebollas`)