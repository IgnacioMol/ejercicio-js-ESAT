/*
 * CODEWARS - RGB To Hex Conversion (5 kyu)
 *
 * The rgb function is incomplete. Complete it so that passing in RGB decimal
 * values will result in a hexadecimal representation being returned. Valid
 * decimal values for RGB are 0 - 255. Any values that fall out of that range
 * must be rounded to the closest valid value.
 *
 * Note: Your answer should always be 6 characters long, the shorthand with 3
 * will not work here.
 *
 * Examples (input --> output):
 *     255, 255, 255 --> "FFFFFF"
 *     255, 255, 300 --> "FFFFFF"
 *     0, 0, 0       --> "000000"
 *     148, 0, 211   --> "9400D3"
 */

function rgb(r, g, b) {
  let rgbHex = ``;

  r = isOutOfRange(r);
  g = isOutOfRange(g);
  b = isOutOfRange(b);

  rgbHex = r.toString(16).padStart(2, `0`) + g.toString(16).padStart(2, `0`) + b.toString(16).padStart(2, `0`);

  rgbHex = rgbHex.toUpperCase();

  console.log(rgbHex);

    return rgbHex;
}

function isOutOfRange(num) {
  if (num < 0){
    num = 0;
  } else if (num > 255){
    num = 255;
  }
  return num;
}
/*
 * [Comentario de Claude]
 *  - toString(16).padStart(2, `0`) está repetido 3 veces: candidato a función auxiliar.
 *  - isOutOfRange devuelve un número, no un booleano: el nombre despista.
 *  - let rgbHex = `` es innecesario y el console.log es de depuración.
 */
