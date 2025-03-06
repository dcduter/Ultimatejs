
//Function no es recomendable usar porque es una funcion anonima, pero hay que saber como funciona 

function Punto (x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function () {console.log('Dibujando...');}
}

let punto = {z: 7};
Punto.call(punto, 1, 2); // la funcion de call es agregar otro this a la funcion Punto
// apply hace lo mismo que call pero hay que colocar los argumentos en un array
console.log(punto); // el resultado en consola es: {x: 1, y: 2, z: 7, dibujar: ƒ}

// const point = new Function ('x', 'y', ` this.x = x;
//     this.y = y;
//     this.dibujar = function () {console.log('Dibujando...');}`);
    
// const p = new point (1, 2);
// console.log(p); // el resultado en consola es: Punto {x: 1, y: 2, dibujar: ƒ}
fun