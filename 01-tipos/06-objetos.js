/* no son primitivos */
//objeto persona
let persona = {
    nombre: "pedro",
    edad: 30,
    altura: 1.80,
}

//formar de cambiar el valor de una propiedad 0 atributo
persona.edad = 25;
persona["edad"] = 25;

//eliminar propiedades de un objeto
delete persona.edad;