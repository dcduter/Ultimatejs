// se usa para ejecutar una funcion dentro de otra

const saludo = (nombrea, () => {

} );


const obtenerPostUsuario = (usuario, callback) => { // se establece una funcion dentro de otra
    console.log(`obteniendo post de ${usuario}...`); // se ejecuta la funcion
    setTimeout(() => {// se usa para pausar la ejecucion de una funcion
       let post = ['post 1', 'post 2', 'post 3']; // se crea un arreglo
       callback(post);// se ejecuta la funcion
    }, 2000);// se usa para pausar la ejecucion de una funcion
}

// se ejecuta la funcion con un callback
obtenerPostUsuario('carlos', (post) => {// se ejecuta la funcion
    console.log(post);
});