/* javascript asincrono permite que el codigo se siga ejecutando mientras se espera a que se complete una tarea,                     
    
*/

const fechtPosts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const posts = ['post 1', 'post 2', 'post 3'];
            const error = false;

            if (error) {
                reject('Error al obtener posts');// si error es true, se ejecuta el reject
            } else {
                resolve(posts);// si error es false, se ejecuta el resolve
            }
        }, 2000); // es el tiempo de ejecucion 2 segundos
    });
};

// console.log('iniciar operacion');
// fechtPosts().then((posts) =>{console.log(posts);})
//             .catch((error) => {console.log(error);});
// console.log('finaliza operacion');

// USANDO ASYNC/AWAIT
const mostrarPosts = async () => {
    // se usa try y cacht para capturar el error
    try {
        const posts = await fechtPosts();
        console.log(posts);
    } catch (error) { // para atrapar el error
        console.log(error);
    };
}

mostrarPosts(); // se llama a la funcion
