```js
let coffees = 2;
let mood = 'dormido';
coffees = coffees + 1;
mood = 'despierto';
let total = coffees * 2;
coffees = 0;
console.log(coffees, mood, total);
```

| Después de la línea | `coffees` | `mood` | `total` |
|---|---|---|---|
| 1 | 2 | (no existe) | (no existe) |
| 2 | 2 | 'dormido' | (no existe) |
| 3 | 3 | 'dormido' | (no existe) |
| 4 | 3 | 'despierto' | (no existe) |
| 5 | 3 | 'despierto' | 6 |
| 6 | 0 | 'despierto' | 6 |

En la linea 6, `coffees` pasa a tener valor 0, pero la variable `total` no cambia pues fue ejecutada antes, por lo que no se actualiza su valor.