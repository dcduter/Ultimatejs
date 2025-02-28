// se indica en que parte se ejecuta el codigo

// se puede usar switch o else if para hacer lo mismo

// switch, se evalua una variable o expresion y se ejecuta el
// codigo segun el caso que se evalua. Si no se encuentra el
// caso, se ejecuta el default
let accion = 'saltar';

switch (accion) {
    // si accion es 'caminar'
    case 'caminar':
        console.log('caminando');
        break; // se sale del switch
    // si accion es 'correr'
    case 'correr': // si el valor de la variable es 'correr' se ejecuta
        console.log('corriendo');
        break; // se sale del switch
    // si accion es 'saltar'
    case 'saltar':
        console.log('saltando');
        break; // se sale del switch
    // si no se encuentra el caso
    default:
        console.log('accion no reconocida');
        break; // se sale del switch
}
