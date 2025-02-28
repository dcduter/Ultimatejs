// bucles

/* while, for, do while, for in, for ot */
/* se ejecuta hasta que la condicion el false */

//cuales son los numeros pares

let i = 0;
while (i < 10) { // condicion, se ejecuta hasta que i sea menor a 10, se ejecuta 10 veces, hacia abajo
    if (i % 2 == 0) {
        console.log('numero par', i);
    }
    i++; // se debe ejecutar afuera del if para que no sea infinito
}

console.log('fin');
//2:12:48