const username = `godo`;
const isValidUsername = username.length >= 3 && username.length <= 15 
                    && !username.startsWith(`_`) && !username.includes(` `);

console.log(isValidUsername);