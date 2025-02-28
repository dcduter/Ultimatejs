
let i = 2;

while (i < 2) {
    if(i % 2 == 0) {
        console.log('numero par', i);

    }
    i++;
}

// el do while evalua la condicion al final y despues ejecuta la condicion if
// por lo tanto, se va a ejecutar al menos una vez, y despues se va a evaluar la condicion
// si la condicion es verdadera, se va a ejecutar de nuevo, y asi sucesivamente hasta que sea falsa
// en este caso, se va a ejecutar 10 veces, ya que i va a valer de 0 a 9
do {
    if(i % 2 == 0) {
        console.log('numero par', i);

    }
    i++;
} while (i < 2);
