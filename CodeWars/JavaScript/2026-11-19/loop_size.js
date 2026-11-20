/*
 * CODEWARS - Can you get the loop? (Loop size)
 *
 * You are given a node that is the beginning of a linked list. This list
 * contains a dangling piece and a loop. Your objective is to determine the
 * length of the loop.
 *
 * For example in the picture of the kata, the size of the dangling piece is 3
 * and the loop size is 12.
 *
 *     // Use the `getNext' method or 'next' property to get the following node.
 *     node.getNext()
 *     node.next
 *
 * Notes:
 *  - do NOT mutate the nodes!
 *  - in some cases there can be just a loop, with no dangling piece.
 *  - Don't miss dmitry's article in the discussion after you pass the Kata !!
 */

function loop_size(node){
  let tortuga = node;
  let liebre = node;

  do {
    tortuga = tortuga.next;
    liebre = liebre.next.next;
  } while (tortuga !== liebre);

  let size = 1;
  tortuga = tortuga.next;

  while (tortuga !== liebre){
    tortuga = tortuga.next;
    size++;
  }

  return size;
}
/*
 * [Comentario de Claude]
 *  - liebre.next.next asume que siempre hay bucle (lo garantiza el enunciado).
 *  - Pendiente de justificar: por qué siempre se encuentran y por qué size empieza en 1.
 */
