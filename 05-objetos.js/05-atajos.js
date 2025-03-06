// atajos


let obj = {}; 
let obj1 = new Object();
//dan el mismo resultado
/* 
new Array () crea; | los arreglos se comportan diferente a los creado en objetos
new String() crea;
new Number() crea;
new Boolean() crea; 
 */

function Usuario(){
    this.nombre = "Juan";

}
let user = new Usuario();
console.log(user.constructor);

// s1 se comporta como un string
const s1 = "1 + 1";
// el resultado en consola es: 1 + 1
//para obtener su valor se usa .value


const s2 = new String("1 + 1");
// el resultado en consola es: [String: '1 + 1']
//para obtener su valor se usa .valueOf como string literal aplica para buleano y number
