const colores = ['rojo', 'azul', 'verde', 'amarillo'];
/* 📌.length📌
propiedad, permite conocer la cantidad de elementos en un arreglo */
console.log(colores.length); // el resultado con el console.log es el siguiente: 4

/* 📌.indexOf📌
metodo, permite conocer la posicion de un elemento en un arreglo */
console.log(colores.indexOf('verde')); // el resultado con el console.log es el siguiente: 2

/* 📌.push📌
metodo, permite agregar un elemento al final del arreglo */
colores.push('negro');
console.log(colores); // el resultado con el console.log es el siguiente: [ 'rojo', 'azul', 'verde', 'amarillo', 'negro' ]

/* 📌.pop📌
metodo, permite eliminar un elemento al final del arreglo */

colores.por();
console.log(colores);
// se elimina el ultimo elemento del arreglo

/* 📌.toString📌 
permite transformar un arreglo en una cadena de texto */
document.body.innerHTML = colores.toString();

/* 📌.join📌
permite transformar un arreglo en una cadena de texto y separar los elementos con el simbolo que se quiera */
console.log(colores.join('-'/* servira como separador */) );

/* 📌.sort*()📌
ordena una cadena de texto alfabéticamente*/

// tambien se puede usar con numeros
//con .reverse() se invierte el orden a como estaba antes
console.log(colores.sort());

/* 📌.contact📌 
permite combinar dos arreglos*/
const arreglo1 = [1, 2, 3];
const arreglo2 = [4, 5, 6];
const arreglo3 = arreglo1.concat(arreglo2);
console.log(arreglo3);
 

/* 📌.shift📌
se usa para eliminar el primer elemento Y recorrer el arreglo */
const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
console.log(dias.shift());// el resultado es el siguiente: lunes 
console.log(dias);// el resultado es el siguiente: [ 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo' ]

/* 📌.unshift📌
permite agregar un elemento al inicio del arreglo */
const dias1 = ['lunes', 'martes', 'miercoles', 'jueves'];
dias1.unshift('domingo');
console.log(dias1);// el resultado es el siguiente: [ 'domingo', 'lunes', 'martes', 'miercoles', 'jueves' ]

/* 📌.splice📌
permite insertat elementos donde se especifique
1 se indica la posicion en la que se va a insertar el elemento 
2 se indica cuantos elementos se van a eliminar
3 se indica el elemento que se va a insertar*/
const amigos = ['juan', 'maria', 'pedro', 'luis'];
amigos.splice(2/* la posicion */, 1/* la cantidad de elemntos a elimininar */, 'jose');// el resultado es: [ 'juan', 'maria', 'jose', 'luis' ]

/* 📌.slice📌
permite copiar una parte de un arreglo a otro */
const frutas = ['manzana', 'banana', 'pera', 'kiwi'];
const frutas2 = frutas.slice(1/* posiicon */, 2);
console.log(frutas2);// el resultado es el siguiente: [ 'banana', 'pera' ]

/* 📌.forEach📌
permite recorrer un arreglo y ejecutar una funcion para cada elemento */
const frutas3 = frutas.forEach((fruta) => {
    console.log(fruta);
});
/* 📌.map📌
permite crear un nuevo arreglo */
const frutas4 = frutas.map((fruta) => {
    return fruta;
});
/* 📌.filter📌
permite filtrar un arreglo */
const frutas5 = frutas.filter((fruta) => {
    return fruta === 'manzana';
});
console.log(frutas5);
/* 📌.reduce📌 
permite recorrer un arreglo y ejecutar una funcion para cada elemento */

/* 📌.find📌
permite buscar un elemento en un arreglo */

/* PENDIENTE LA PARTE 2, 3, 4 Y 5 
*/