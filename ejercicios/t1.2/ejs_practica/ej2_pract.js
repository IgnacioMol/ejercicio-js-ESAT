let hasCourt;
let players;
let isRaining;

let canPlayPadel;
let needsMorePlayersInPadel;
const minPlayers = 4;


//opcion con funcion
function thereIsPadel (hasCourt, players, isRaining){
    canPlayPadel = canPlay(hasCourt, players, isRaining);
    needsMorePlayersInPadel = needsMorePlayers(players);
    console.log(canPlayPadel, needsMorePlayersInPadel);
}

function canPlay (hasCourt, players, isRaining){
    return (hasCourt && players === minPlayers && !isRaining);
}

function needsMorePlayers (players){
    return (players < minPlayers);
}

//Case1
thereIsPadel(true, 4, false);

//Case2
thereIsPadel(true, 3, false);

//Case3
thereIsPadel(true, 4, true);

//Case4
thereIsPadel(false, 5, false);

/*
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
*/

