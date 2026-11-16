/*
 * CODEWARS (6 kyu) - Multiples of 3 or 5
 * Tags: Mathematics, Algorithms
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5,
 * we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Finish the solution so that it returns the sum of all the multiples of
 * 3 or 5 below the number passed in.
 *
 * Additionally, if the number is negative, return 0.
 *
 * Note: If a number is a multiple of both 3 and 5, only count it once.
 *
 * Courtesy of projecteuler.net (Problem 1)
 */

function solution(number){
  if (number < 0){
    return 0;
  }
  let sumMulti = 0;

  for (let n = 0; n < number; n++){
    if (n % 3 === 0 || n % 5 === 0){
      sumMulti += n;
    }
  }
  return sumMulti;
}

/*
 * [Comentario de Claude] Pendiente para retomar:
 *  - Reto sin bucle: 3 + 6 + 9 + ... = 3 * (1 + 2 + 3 + ...) -> fórmula de
 *    Gauss. Igual con el 5, y restar lo contado dos veces (múltiplos de 15).
 *  - Preguntas abiertas: ¿por qué empezar el bucle en 0 y no en el primer
 *    múltiplo? ¿Qué devuelve solution(0) con "< 0" frente a "<= 0"?
 */
