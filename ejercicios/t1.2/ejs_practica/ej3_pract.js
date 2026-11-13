// 1. La media de los dos exámenes de Godofredo
const firstExam = 7;
const secondExam = 9;
const average = (firstExam + secondExam) / 2; //Aqui faltaria un parentesis que englobe los examenes
console.log(average); // Esperado: 8

// 2. ¿Es administrador?
const role = 'admin';
const isAdmin = role.toUpperCase === 'ADMIN'; //Le faltaría poner ".toUpperCase()" o ".toLowerCase()" al role y, ademas, poner el texto a comparar en mayusculas o minusculas
console.log(isAdmin); // Esperado: true, aunque el rol venga en minúsculas o mayúsculas

// 3. ¿Es mayor de edad?
const age = 18; //Si queremos saber la edad, esto deberia ser un numero y no un string
const isAdult = age === 18 || age > 18;
console.log(isAdult); // Esperado: true
