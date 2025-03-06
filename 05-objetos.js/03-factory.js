
// let user = {
//     id:1,
//     email: 'juan@desarrolloweb',
//     nome: 'juan',
//     activo: true,
//     recuperarClave: function(){
//         console.log('recuperando clave...');
//     },
// };
// // creamo 4 usuarios
// let user2 = {
//     id:2,
//     email: 'pedro@desarrolloweb',
//     nome: 'pedro',
//     activo: true,
//     recuperarClave: function(){
//         console.log('recuperando clave...');
//     },
// };

// let user3 = {
//     id:3,
//     email: 'juanito@desarrolloweb',
//     nome: 'juanito',
//     activo: false,
//     recuperarClave: function(){
//         console.log('recuperando clave...');
//     },
// };

// para no copiar asuarios se usa la siguiente funcion

function crearUsuario (name, email){// funcion que crea un usuario
return {
    email,
    name,
    activo: false,
    recuperarClave: function(){
        console.log('recuperando clave...');
    },
};
}

//definimos una variable con los parametros de nombre y correo con la funcion crearUsuario para crear usuarios
let user1 = crearUsuario('juan', 'juan@desarrolloweb');
let user2 = crearUsuario('pedro', 'pedro@desarrolloweb');