class Usuario {
    constructor (nombre, correo){
        this.nombre = nombre; // si no esta la crea y la asigna a nombre
        this.correo = correo; // si no esta la crea y la asigna a correo
    }
   static  borrarUsusario (id) {
        console.log(`El usuario ${id} se ha borrado de la base de datos`);
    }
};

// const usuario = new Usuario('Fernando', 'fernando@gmail.com');
usuario.borrarUsusario(2); // permite llamar al metodo estatico si crear un objeto
// console.log(Usuario.borrarUsusario(2));
