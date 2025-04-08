
let i = 2;
while (i < 2) {
    if (i % 2 == 0 ) {
        console.log('numero par', i);
    }
    i++;
}



// for simplifica el codigo del while, la variable se define el comienzo, la condicion y el incremento
for (let i = 2; i < 10; i++){
    if (i % 2 == 0 ){
        console.log('numero par', i);
    }
}

for (let u = 0; u < 12; u++) {
    console.log(u);
}

/* Ejemplo de uso */

const carrito = [
    { nombre: 'Monitor 20 Pulgadas',precio: 500 },
    { nombre: 'Laptop', precio: 800 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Audifonos', precio: 150 },
    { nombre: 'Celular', precio: 250 },
    { nombre: 'Mouse', precio: 100 },
    { nombre: 'Cargador', precio: 50 },
    { nombre: 'Cámara', precio: 100 },
    { nombre: 'Parlante', precio: 100 },
    { nombre: 'Cargador carga rapida', precio: 50 },
    { nombre: 'Cámara 4k', precio: 100 },
    { nombre: 'Parlante 2.1', precio: 100 },
];

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);// devuele el valor de nombre de cada objeto
    console.log(carrito[i].precio);// devuele el valor de precio de cada objeto
    
}