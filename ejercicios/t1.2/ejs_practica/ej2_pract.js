let hasCourt;
let players;
let isRaining;

let canPlay;
let needsMorePlayers;
const minPlayers = 4;

//Case 1
hasCourt = true, players = 4, isRaining = false;
canPlay = (hasCourt && players === minPlayers && !isRaining);
needsMorePlayers = (players < minPlayers);
console.log(canPlay, needsMorePlayers); 

//Case 2
hasCourt = true, players = 3, isRaining = false;
canPlay = (hasCourt && players === minPlayers && !isRaining);
needsMorePlayers = (players < minPlayers);
console.log(canPlay, needsMorePlayers); 

//Case 3
hasCourt = true, players = 4, isRaining = true;
canPlay = (hasCourt && players === minPlayers && !isRaining);
needsMorePlayers = (players < minPlayers);
console.log(canPlay, needsMorePlayers); 

//Case 4
hasCourt = false, players = 5, isRaining = false;
canPlay = (hasCourt && players === minPlayers && !isRaining);
needsMorePlayers = (players < minPlayers);
console.log(canPlay, needsMorePlayers); 