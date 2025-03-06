/* indice validar que no sea mayor a cero y que el elemento exista en el array */

// Esta función `getbyIdx` toma un array `arr` y un índice `idx`.
// Primero verifica si el índice es válido (no negativo y dentro del rango del array).
// Si el índice es inválido, devuelve "elementos no existe".
// Si el índice es válido, devuelve el elemento en la posición `idx` del array.

function getbyIdx(arr, idx) {
    if (idx < 0 || arr.length <= idx) {
        return "elementos no existe";
    }
    return arr[idx];
}

// Ejemplo de uso: busca el elemento en el índice 2 del array [1, 2].
// Como el índice 2 no existe en el array, devuelve "elementos no existe".
let resultado = getbyIdx([1, 2], 2);
console.log(resultado);
