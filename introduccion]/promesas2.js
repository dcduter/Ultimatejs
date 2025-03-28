// se difine una promesa para que el navegador espere a que se ejecute la promesa o no se ejecute la promesa
const obtenserPost = () =>{
    // retorna la promesa
    // resolve y reject son argumentos de la promesa para saber si la promesa se ejecuto o no
     return new Promise((resolve, reject) => {
        // se defiene la funcion de la promesa
        setTimeout(() => {
            const post = ['post 1', 'post 2', 'post 3'];
            const error = false; // por si se hay algun error, si es true no se

            if (error){
                resolve(post);// entrega el post (la lista de post)
            } else {
                reject('hubo un error');
            }
        }, 2000);

     });
    }

// se llama a la promesa
obtenserPost()
  .then((post) => {console.log(post); })
  .catch((error) => console.log(error));
// minuto 7:30