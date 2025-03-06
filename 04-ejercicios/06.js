// crear un algoritmo que devuelva la cantidad de numero positivos


let array = [2, 5, 7, 15, -5, -100, 55, 67];


function getPositivos(arr) {
    let positivos = 0;
    for (let i = 0; i < arr.length; i++)//se recorre todos los elementos de array
         {
        if (arr[i] > 0) {
            positivos++;
        }
    }
    return positivos;
}
console.log(getPositivos(array)); // 5