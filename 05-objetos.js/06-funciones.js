// funciones tambien son objetos
// las funciones se pueden asignar a otras variables o constantes
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

// pueden pasar como argumento una funcion
function of(Fn,arg){
    return new Fn(arg);
}

// se llama a la funcion of y se le pasa la funcion y el argumento
let user1 = of(usuario,'juan'); //se puede pasar una funcion y un argumento
console.log(user1);

function returned(){
    return function (){
        console.log('hola mundo');
    }
}

let saludo = returned();// se usa para asignar la funcion a una variable
saludo(); // se usa para llamar la funcion