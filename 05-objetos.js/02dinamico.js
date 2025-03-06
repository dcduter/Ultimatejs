const user = {id: 1 }; // al ser un objeto, se puede reasignar los valores y a su vez, se puede agregar nuevos valores


user.name = 'juan';
user.guardar = function(){
    console.log('Guardando', user.name);

}
user.guardar();

//con freeze se congelan los valores del objeto, no se puede modificar
//con seal se puede modificar pero no se pueden agregar nuevos valores

// const user1 = Object.freeze({id: 1 });
const user1 = Object.seal({id: 1 });

user1.name = 'juan';
user1.id = 2;
console.log(user1);