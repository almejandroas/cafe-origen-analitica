const { ventas } = require("./analitica");


ventas

Cantregistros = ventas.length;
primero = ventas[0];
ultimo = ventas.at(-1);
produ4 = ventas[3].producto


console.log(Cantregistros)
console.table(primero)
console.table(ultimo)
console.log(produ4)