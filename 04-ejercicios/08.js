/* 
crea una funcion que tome un array de objetos y devuelva un array de pares */

let array = [{
    id: 1,
    nombre: "juan"
},
{
    id: 2,
    nombre: "pedro"
},
{
    id: 3,
    nombre: "maria"
}];

let pares = [
    [1, {id: 1, nombre: "juan"}],
    [2, {id: 2, nombre: "pedro"}],
    [3, {id: 3, nombre: "maria"}],
];

function obtenerPares(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs [idx] = [elemento.id, elemento];
        }
        return pairs;
}

let resultado = obtenerPares(array);
console.log(resultado);