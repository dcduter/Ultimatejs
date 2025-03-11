// son plantillas para crear objetos
/* 📌Estructura de una clase📌
Propiedades: la clase puede tener variables, una clase se llaman propiedades
Constructor: Es un metodo especial para iniciar un objeto creado a partir de una clase
Metodos: La clase puede contener funciones. dentro de una clase se llaman metodos */

class Usuario {
    tipo = 'admin';// al ser propiedad se usa ;
    // constructor
    constructor(nombre, apellido)/* valores para crear el objeto */ {
        this.nombre = nombre;/* hace referencia a al propia clase */
        this.apellido = apellido; // si no esta la crea
        console.log('Nuevo registro de usuario');
    }
    // esta disponible para todas las instancias u objetos
    obtenerNombreCompleto() {
        console.log('obtenienod datos...');
        return `${this.nombre} ${this.apellido}`;
    }
}

//new Usuario('Fernando', 'Garcia'/* valores para el constructor */); // para guardarlo lo creamos con una variable

const usuario = new Usuario('Fernando', 'Garcia');
console.log(usuario.obtenerNombreCompleto()); // el resultado con el console.log es el siguiente: Usuario { tipo: 'usuario', nombre: 'Fernando', apellido: 'Garcia' }

// craemos mas objetos con la misma clase
const usuario2 = new Usuario('padra', 'Garcia');
console.log(usuario2); // el resultado con el console.log es el siguiente: Usuario { tipo: 'admin', nombre: 'Fernando', apellido: 'Garcia' }

const usuario3 = new Usuario('polla', 'Garcia');
console.log(usuario3); // el resultado con el console.log es el siguiente: Usuario { tipo: 'admin', nombre: 'Fernando', apellido: 'Garcia' }
