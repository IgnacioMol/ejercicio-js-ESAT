function canSeeMovie(age, withAdult, rating){

    switch(rating){
        case `TP`:
            return `Puede entrar`;
            
        case `+12`:
            if (age < 12 && !withAdult){
                return `No puede entrar`;
            } else if (age < 7){
                return 'No puede entrar';
            } else {
                return `Puede entrar`;
            }

        case `+16`:
            if (age < 16 && !withAdult){
                return `No puede entrar`;
            } else {
                return `Puede entrar`;
            }

        case `+18`:
            if (age < 18){
                return `No puede entrar`;
            } else {
                return `Puede entrar`;
            }

        default:
            return `Clasificación desconocida`;
    } 
}

const age1 = 10, age2 = 10, age3 = 10, age4 = 6, age5 = 16, age6 = 17, age7 = 20;
const withAdult1 = false, withAdult2 = true, withAdult3 = false, withAdult4 = true, withAdult5 = false, withAdult6 = true, withAdult7 = false;
const rating1 = `TP`, rating2 = `+12`, rating3 = `+12`, rating4 = `+12`, rating5 = `+16`, rating6 = `+18`, rating7 = `X`;

console.log(`Case 1: `, canSeeMovie(age1, withAdult1, rating1));
console.log(`Case 2: `, canSeeMovie(age2, withAdult2, rating2));
console.log(`Case 3: `, canSeeMovie(age3, withAdult3, rating3));
console.log(`Case 4: `, canSeeMovie(age4, withAdult4, rating4));
console.log(`Case 5: `, canSeeMovie(age5, withAdult5, rating5));
console.log(`Case 6: `, canSeeMovie(age6, withAdult6, rating6));
console.log(`Case 7: `, canSeeMovie(age7, withAdult7, rating7));