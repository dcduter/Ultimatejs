//las funciones constructora requieren que se esa la primera letra en mayuscula


function Usuario (){
    this.id = 1;
    this.recuperarClave = function(){ // las funciones en un objeto se llaman metodos
        console.log("recuperar clave");
    }
};

let usuario = new Usuario();
console.log(usuario);