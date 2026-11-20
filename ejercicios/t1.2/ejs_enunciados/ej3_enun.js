const user1 = `godo`;
const user2 = `_rodofasio`;
const user3 = `gu`;
const user4 = `ruperto el grande`;
const user5 = `abc`;
const user6 = `xindasvinto_2025`;

const isValidUsernameOG = user1.length >= 3 && user1.length <= 15 
                    && !user1.startsWith(`_`) && !user1.includes(` `);

console.log(isValidUsernameOG);
console.log(`-----------------`);

function isValidUsername(user){
    const isValidLength = user.length >= 3 && user.length <= 15;
    const isValidStart = !user.startsWith(`_`);
    const hasNoSpace = !user.includes(` `);

    return (isValidLength && isValidStart && hasNoSpace);
}



console.log(isValidUsername(user1));
console.log(isValidUsername(user2));
console.log(isValidUsername(user3));
console.log(isValidUsername(user4));
console.log(isValidUsername(user5));
console.log(isValidUsername(user6));