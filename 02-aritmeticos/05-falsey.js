//short-circuit
/* valores de falsy:
null
""
0
False
NaN
 */

let nombre = 'juan';
let userName = nombre || 'Anonimo';// se ejecuta si la variable es false
console.log(userName); // Anonimo; 

function fn1 () {
    console.log('soy funcion 1');
    return true;
}

function fn2 () {
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2(); // si fn1 es true y fn2 es true, x es true
let y = fn1() || fn2(); // si fn1 es true o fn2 es true, y es true
// 26 de febrero andres llama para salir al parque 
 