let candies = 47;
const nephews = 6;
let candiesPerNephew;
let extraCandies;


candiesPerNephew = Math.trunc(candies / nephews);
extraCandies = candies % nephews;
console.log(`Cada sobrino recibe ${candiesPerNephew} caramelos y sobran ${extraCandies}`);

candies = 30;
candiesPerNephew = Math.trunc(candies / nephews);
extraCandies = candies % nephews;
console.log(`Cada sobrino recibe ${candiesPerNephew} caramelos y sobran ${extraCandies}`);

candies = 4;
candiesPerNephew = Math.trunc(candies / nephews);
extraCandies = candies % nephews;
console.log(`Cada sobrino recibe ${candiesPerNephew} caramelos y sobran ${extraCandies}`);