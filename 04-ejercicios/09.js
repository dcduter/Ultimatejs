
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
    [1, { nombre: "juan"}],
    [2, { nombre: "pedro"}],
    [3, { nombre: "maria"}],
];

function toCollection(arr){
// ambas soluciones dan el mismo resultado
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;
    // let collection = [];
    // for (let i = 0; i < arr.length; i++) {
    //     collection.push(arr[i][1]);
    //     collection[i].id = arr[i][0];
    // }
    // return collection; 
}

let resultado = toCollection(pares);
console.log(resultado);