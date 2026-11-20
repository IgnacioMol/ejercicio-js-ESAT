

function pricePerMinute(minutes, isResident){
    let priceCent = -1;
    let price = -1;
    if (minutes < 0){
        return price;
    }

    priceCent = (minutes-30) * 5;
    if (priceCent < 0){
        priceCent = 0;
    }

    if (priceCent/100 >= 15.00){
        price = 15;
    } else {
        price = priceCent / 100;
    }

    if (isResident){
        price /= 2;
    }

    return price;
}

function message (time, isResident){
    if (pricePerMinute(time, isResident) >= 0){
        console.log(`Precio: `, pricePerMinute(time, isResident), `€`);
    } else {
        console.log('Tiempo no válido');
    }
}


const minutes1 = 20, minutes2 =90, minutes3 = 90, minutes4 = 600, minutes5 = 600, minutes6 = -5;
const isResidentT = true, isResidentF = false;

console.log('Case 1: ');
message(minutes1, isResidentF);

console.log('Case 2: ');
message(minutes2, isResidentF);

console.log('Case 3: ');
message(minutes3, isResidentT);

console.log('Case 4: ');
message(minutes4, isResidentF);

console.log('Case 5: ');
message(minutes5, isResidentT);

console.log('Case 6: ');
message(minutes6, isResidentF);