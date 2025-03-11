//📌scope global📌
// son varibles glabales que se declaran fuera de una funcion
// se declaran con var, let o const y var

// var nombre = 'Fernando'; // variable global

// const saludo = () => {
//     console.log(`hola ${nombre}`); //se usa la variable global
// };

// saludo();

// 📌SCOPE LOCAL 📌
// son varibles locales que se declaran dentro de una funcion 
// Solo se pueden acceder desde dentro de la funcion

// var numeroLetras = (nombre) => {
//     let numero = nombre.length; // variable local, solo esta disponible para esa funcion
//     console.log(`la cantidad de letras son ${numero}`);
// }

// numeroLetras("Alejandro"); // el resultado con el console.log es el siguiente: la cantidad de letras son 9

// 📌SCOPE DE BLOQUE📌
/* estan todas las variables let o constdeclaradas dentro de un bloque de codigo {}
solo se puede acceder a ellas desde dentro del bloque */
/* 3:35:40 */

const edad = 19;
// bloque de la funcion 
// 
if (edad >= 18){
    const acceso = true;// esta disponible solo dentro del bloque
    console.log(acceso); // resultado en consola es true
    if (true){
        console.log(acceso);
    }
    const miFuncion = () => {
        console.log(acceso);
    }

    // todas pueden acceder a la variable acceso porque estan dentro de un bloque
}

// las variables con var se pueden acceder fuera del bloque