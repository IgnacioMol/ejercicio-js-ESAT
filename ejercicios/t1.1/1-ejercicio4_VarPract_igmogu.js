//Receta abuela para 4 personas
//Ingredientes
let eggNum = 6;
let potatoNum = 4;
let onionNum = 1;
const basePeople = 4;

const eggUnit = eggNum / basePeople;
const potatoUnit = potatoNum / basePeople;
const OnionUnit = onionNum / basePeople;

let peopleNum = 10;

console.log(`Para ${peopleNum} personas: 
${eggUnit * peopleNum} huevos
${potatoUnit * peopleNum} patatas
${OnionUnit * peopleNum} cebollas`)