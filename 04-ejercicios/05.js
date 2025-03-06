/* crear un algoritmo que devueva un numeor menor y mayor de un array. */

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
    let menor;
    let mayor;
    for (numero of arr) {
        // El signo "?" es parte del operador ternario, que es un atajo para una estructura condicional if-else.
        // El signo ":" separa la expresión que se evalúa si la condición es falsa.
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }

    return [menor, mayor];
}

let oiuio = getMenorMayor(array); // los parentesis () es una funcion que llama al algoritmo y se le pasa el array como parametro.
console.log(oiuio);

function saludar (nombre){
    console.log(`hola, ${nombre}`);
    }
        
    
saludar('paco');