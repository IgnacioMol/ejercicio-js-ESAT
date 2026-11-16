/*
 * CODEWARS (6 kyu) - Your order, please
 * Tags: Strings, Fundamentals
 *
 * Your task is to sort a given string. Each word in the string will contain
 * a single number. This number is the position the word should have in the
 * result.
 *
 * Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 *
 * If the input string is empty, return an empty string. The words in the
 * input String will only contain valid consecutive numbers.
 *
 * Examples:
 *     "is2 Thi1s T4est 3a"                --> "Thi1s is2 3a T4est"
 *     "4of Fo1r pe6ople g3ood th5e the2"  --> "Fo1r the2 g3ood 4of th5e pe6ople"
 *     ""                                  --> ""
 */

function order(words){
  const vectorStringAux = [];
  const splitWords = words.split(` `);

  for (const word of splitWords){
    for (const character of word){
      const numInChar = Number(character);
      if (!Number.isNaN(numInChar)){
        vectorStringAux[numInChar-1] = word;
        break;
      }
    }
  }

  return vectorStringAux.join(" ");
}

/*
 * [Comentario de Claude] Retos pendientes para retomar:
 *  - A: resolverlo sin bucles explícitos: split -> sort(con función de
 *       comparación que use el número de cada palabra) -> join.
 *  - B: sacar el dígito de cada palabra con una expresión regular (match)
 *       en vez de recorrer los caracteres.
 *  - Pregunta abierta: ¿qué impide const y qué no impide? (por qué funciona
 *    con el array).
 */
