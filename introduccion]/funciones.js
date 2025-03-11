// //📌forma 1
// function saludar () {
//     // aca se estan declarando las variables
//     console.log('hola'); 
// }// se se ejecura cuando se llama

// // llamando la funcion

// saludar();

//📌forma 2 asignando la funcion a una variable

let saludo = function() {
    console.log('hola desde la variable');
}

saludo(); // se ejecuta cuando se llama

//📌forma 3 funcion tipos flecha.

let saludo2 = () => console.log('hola desde la variable'); // cuando es de una sola linea se puede omitir el return

saludo2();
// ⚠️ Esto es una advertencia importante
// 🔴 Esto es un error crítico
// ✅ Esto es una tarea completada

//📌 PARAMETROS Y ARGUMENTOS EN LAS FUNCIONES📌


const saludo3 = (nombre/* parametro */) =>{
    console.log(`hola ${nombre}`);
};
saludo3('juan'/* argumento */);

let numero = function (num/* parametro */){
    console.log(`el numero es ${num}`);
}

numero(10/* argumento */); 

//📌 RETORNOS EN LAS FUNCIONES📌
const operacion = (tipo, num1, num2) => {
    if (tipo === 'suma'){
        return resultado = num1 + num2; //
    } else if (tipo === 'resta'){
        return resultado = num1 - num2; // 
    }
};
const miVariable = operacion('suma', 10, 20); // 
console.log(miVariable);