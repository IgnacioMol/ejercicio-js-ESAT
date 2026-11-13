let totalSeconds;
const timeH = 3600;
const timeM = 60;

let hours;
let minutes;
let seconds;
let isLongerThanAnHour;

//case 1
totalSeconds = 135;
isLongerThanAnHour = totalSeconds > timeH;
hours = Math.floor(totalSeconds / timeH);
totalSeconds -= timeH * hours;
minutes = Math.floor(totalSeconds / timeM);
totalSeconds -= timeM * minutes;
console.log(`${hours} h ${minutes} min ${totalSeconds} s · ¿Más de una hora? ${isLongerThanAnHour}`);

//case 2
totalSeconds = 3725;
isLongerThanAnHour = totalSeconds > timeH;
hours = Math.floor(totalSeconds / timeH);
totalSeconds -= timeH * hours;
minutes = Math.floor(totalSeconds / timeM);
totalSeconds -= timeM * minutes;
console.log(`${hours} h ${minutes} min ${totalSeconds} s · ¿Más de una hora? ${isLongerThanAnHour}`);

//case 3
totalSeconds = 7200;
isLongerThanAnHour = totalSeconds > timeH;
hours = Math.floor(totalSeconds / timeH);
totalSeconds -= timeH * hours;
minutes = Math.floor(totalSeconds / timeM);
totalSeconds -= timeM * minutes;
console.log(`${hours} h ${minutes} min ${totalSeconds} s · ¿Más de una hora? ${isLongerThanAnHour}`);

//case 4
totalSeconds = 59;
isLongerThanAnHour = totalSeconds > timeH;
hours = Math.floor(totalSeconds / timeH);
totalSeconds -= timeH * hours;
minutes = Math.floor(totalSeconds / timeM);
totalSeconds -= timeM * minutes;
console.log(`${hours} h ${minutes} min ${totalSeconds} s · ¿Más de una hora? ${isLongerThanAnHour}`);