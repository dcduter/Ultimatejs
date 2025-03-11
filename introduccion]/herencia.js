/* permite crear clases tomando como base otra clase */
class Usuario {
    constructor(usuario, contraseña){
        this.usuario = usuario;
        this.contraseña = contraseña;
    }
}

const usuario = new Usuario('Fernando', 'Garcia');

class Moderador extends Usuario {
  constructor(usuario, contraseña, permisos){
      super(usuario, contraseña); // permite llamar al constructor de la clase padre
      this.permisos = permisos;
  }
  borrarPost(id) {
    if (this.permisos.includes('borrar')) {
        console.log(`El moderador ${id} se ha borrado el post`);
        } else {
            console.log('No tienes permisos para borrar post');
        }
 }
}

const usuario2 = new Moderador('juan', 'Garcia', ['borrar', 'editar', 'crear']);
console.log(usuario2);   
console.log(usuario2.permisos);
usuario2.borrarPost(3); 