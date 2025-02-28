// break permite salir de un bucle
// continue permite saltar una iteracion del bucle

// funciona con while, for, do while, for in, for of

let i = 0;
while (i < 10) {
    i++;
    if (i === 5){
    continue;
    }
    if ( i === 7){
        break;
    }
    console.log(i);
}
// 1, 2, 3, 4, 6 porque evalua si vale 7 y no lo imprime
