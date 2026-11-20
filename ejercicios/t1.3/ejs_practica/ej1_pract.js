const batteryLevel = 47;
const isCharging = false;

function cellState(batteryLevel, isCharging){
    let cellMessage = ``;
    if(batteryLevel <= 0){
        batteryLevel = 0;
        cellMessage = `Telefono sin batería`;
        return cellMessage;
    } else if (batteryLevel > 100){
        batteryLevel = 100;
    }

    if (isCharging){
        cellMessage = `Cargando (${batteryLevel}%)`;
    } else {
        if (batteryLevel <= 5){
            cellMessage = `Batería crítica: el móvil se apagará pronto`;
        } else if (batteryLevel <= 20){
            cellMessage = `Batería baja`;
        } else if (batteryLevel < 100){
            cellMessage = `Batería correcta`;
        } else {
            cellMessage = `Batería llena`;
        }
    }

    return cellMessage
}

console.log(cellState(batteryLevel, isCharging));
