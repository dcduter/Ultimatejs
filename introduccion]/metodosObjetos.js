const usuario = {
    nombre: 'Fernando',
    edad: 38,
    amigos: ['juan', 'pedro', 'maria'],
    saludo: () => console.log(`hola ${this.nombre}`),
};

/* 📌Metodos propios o personalizados 📌 */

usuario.saludo();

/* 📌Object.keys()
nos devuelve un arreglo con las llaves */
const laves =Object.keys(usuario); // el resultado con el console.log es el siguiente: [ 'nombre', 'edad', 'amigos', 'saludo' ]  

/* 📌Object.values()
nos devuelve un arreglo con los valores */
const valores = Object.values(usuario); // el resultado con el console.log es el siguiente: [ 'Fernando', 38, [ 'juan', 'pedro', 'maria' ], [Function (anonymous)] ]

/* 📌Object.entries
nos devuelve un arreglo con las llaves y los valores */
const resultados = Object.entries(usuario); // el resultado con el console.log es el siguiente: [ [ 'nombre', 'Fernando' ], [ 'edad', 38 ], [ 'amigos', [ 'juan', 'pedro', 'maria' ] ], [ 'saludo', [Function (anonymous)] ] ]

