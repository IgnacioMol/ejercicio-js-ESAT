/*
 * CODEWARS - Next bigger number with the same digits (4 kyu)
 *
 * Create a function that takes a positive integer and returns the next bigger
 * number that can be formed by rearranging its digits. For example:
 *
 *       12 ==> 21
 *      513 ==> 531
 *     2017 ==> 2071
 *
 * If the digits can't be rearranged to form a bigger number, return -1
 * (or nil in Swift, None in Rust):
 *
 *       9 ==> -1
 *     111 ==> -1
 *     531 ==> -1
 */

function nextBigger(n) {
    let digits = n.toString().split("").map(Number);

    for (let i = digits.length - 2; i >= 0; i--) {
        if (digits[i] < digits[i + 1]) {

            for (let j = digits.length - 1; j > i; j--) {
                if (digits[j] > digits[i]) {
                    let temp = digits[i];
                    digits[i] = digits[j];
                    digits[j] = temp;

                    let rest = digits.slice(i + 1).sort((a, b) => a - b);
                    digits = digits.slice(0, i + 1).concat(rest);

                    return Number(digits.join(""));
                }
            }
        }
    }

    return -1;
}
/*
 * [Comentario de Claude]
 *  - Tras el intercambio, el tramo a la derecha de i sigue en orden descendente:
 *    el sort podría ser una operación más barata.
 *  - El bucle interior siempre devuelve en el primer i encontrado: el for exterior
 *    solo "importa" una vez.
 *  - Pendiente de justificar: por qué el i más a la derecha y por qué el j desde la derecha.
 */
