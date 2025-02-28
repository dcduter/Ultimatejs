// for of se usa para recorrer arrays(listas) y strings

let amimales = ['perro', 'gato', 'lobo', 'elefante', 'tigre'];
for (let animal of animales) {
    console.log(animal);
}

//ahora con while
let i = 0; // se defiene el indice
while (i < animales.length) {
    console.log(animales[i]); 
    i++;// se usa para que no sea infinito y pase al siguiente indice en la lista de animales
    
}