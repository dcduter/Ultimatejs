const punto = {
    x:10,
    y:15,
    dibujar () {console.log('Dibujando...');//metodo

    },
};

// delete punto.dibujar;
// if ('dibujar' in punto) {
//     punto.dibujar(); // se llama al metodo
// };

// let keys = Object.keys(punto); //se usa para ver las propiedades de un objeto
// // el resultado es: ['x', 'y', 'dibujar']
// console.log(Object.keys(punto)); //hace lo mismo que let keys

// for (let llave of Object.keys(punto)){ //se usa para recorrer las propiedades de un objeto
//     console.log(llave, punto[llave]); //se usa para ver el nombre de la propiedad y el valor de la propiedad, se usa [llave] para acceder a la propiedad

//     // el resultado es:
//     // x 10
//     // y 15
//     // dibujar ƒ () {console.log('Dibujando...');}
// }

// for (let llave in punto){ //se usa para recorrer las propiedades de un objeto
//     console.log(llave, punto[llave]); //se usa para ver el nombre de la propiedad y el valor de la propiedad se usa [llave] para acceder a la propiedad

//     // el resultado es mismo que for of
// }

for (let entry of Object.entries(punto)){ //se usa para recorrer las propiedades de un objeto
    console.log(entry); //se usa para ver el nombre de la propiedad y el valor de la propiedad se usa [llave] para acceder a la propiedad

    // el resultado es: 
    // ['x', 10]
    // ['y', 15]
    // ['dibujar', ƒ]
}
