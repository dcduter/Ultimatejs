// and, or y not

// and = &&, para que d e true los valores a comparar deben ser true
// or = ||, para que d e true al menos uno de los valores a comparar debe ser
// not = !, para que d e true el valor a comparar debe ser false

console.log (true && true); // true
console.log (true && false); // false

let mayor = true
let suscrito = true

console.log (mayor && suscrito); // true

console.log (mayor || suscrito); 

console.log (!mayor);//false

let soloCatalogoInfantil = !mayor;