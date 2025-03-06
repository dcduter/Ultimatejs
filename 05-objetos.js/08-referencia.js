let a = {};
let b = a;
b.prop = 1;
console.log(a, b); // el resultado es: {prop: 1} {prop: 1}

let c = 2;

function suma(n) {
    n++;
}

// las dato primitivosse copian
// los de referencia se pasan por referencia (objetos, arrays, funciones)