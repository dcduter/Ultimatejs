// funciones tambien son objetos
function usuario(nombre) {
    this.nombre = nombre;
}



console.log(usuario.prototype); //prototipo se usa para ver las propiedades y metodos de un objetos
console.log(usuario.name); //.name se usa para ver el nombre de la funcion
console.log(usuario.length);//.length se usa para ver el numero de parametros de la funcion

//se puede tomar una funcion y asignarla a una variable

let U = usuario;
let user = new U('juan');
console.log(user);
//minuto 3:32:40