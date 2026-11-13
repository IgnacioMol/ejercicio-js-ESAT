console.log(1 + '1'); //Aqui saldrá 11, al "sumar" un numero y un string, simplemente une ambos como si fueran strings
console.log(typeof '42'); //Aqui saldra string. "typeof" solo indica el tipo de valor que representa una variable concreta
console.log(2 + 3 * 4); //Aqui saldrá 14. Es un calculo matematico simple
console.log(17 % 5); //Aqui saldrá 2. La operacion "%" muestra el resto de la division entre valor a y b
console.log('Godofredosbkswbwsdkvbksbksdvbksbvksvbkjsbvkjsdvbkjsbjkvb'.length); //Aqui saldrá 9. La operación ".length" muestra la longitud de una cadena string
console.log(10 === '10'); //Aqui saldrá false. El operador "===" indica si a y b son EXACTAMENTE iguales, si fuera "==" mostraría true, pues revisa si el valor interno es el mismo independientemente del tipo de valor (ya sea String o numerico)
console.log('Ornitorrinco'.toUpperCase().includes('RINCO')); //Aqui saldrá true. La funcion ".toUpperCase" transforma toda una cadena de texto a mayusculas, mientras que ".includes" revisa si dentro de ese string existe la cadena exacta "RINCO"
console.log(typeof (5 > 3)); //Aqui saldrá boolean. "typeof" aqui esta analizando una comparacion entre dos valores, cuyo resultado puede ser true o false
console.log(`${2 + 2} manzanas`); //Aqui saldrá "4 manzanas". La expresion "${}" te permite ejecutar codigo que muestre un valor dentro de un string
console.log(!(3 >= 3) || 'a' !== 'b'); //Aqui saldrá true. El operador "||" representa un "o" en una condicion booleana. Cuando hay una comparacion y hay al menos UN resultado verdadero, se mostrará true. Si pusieramos el operador "&&", ambos terminos deberían ser verdaderos para mostrar true