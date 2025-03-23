console.log('hola');
// la promesa debe empezar con mayuscula
const promesa = new Promise ((resolve, reject) => {
    // creamos una funcion para simular una acion
    setTimeout(() => {
        const exito = true;
        if (exito) {
            resolve('la operacon fue exitosa'); // si la condicion exito se ejecuta se ejecuta el resolve declarado en la promesa
        } else {
            reject('error'); // si la condicion exito no se ejecuta se ejecuta el reject declarado en la promesa
        }
    }, 4000); // despues de 4 segundos se ejecuta la funcion si tuvo exito o no

}); 
// si la promesa se ejecura se ejecuta la siguiente funcion
promesa.then((mensaje)=> {
    alert (mensaje); //mostrar el mensaje de resolve


});

// si se ejecuta reject (es false) se ejecuta la siguiente funcion
promesa.catch((mensaje)=> {
    alert (mensaje); //mostrar el mensaje de resolve


});