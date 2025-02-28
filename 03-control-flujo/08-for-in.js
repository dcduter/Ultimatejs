// for in se usa para iterar las propiedades de un objeto

// objetos
let persona = {
    nombre: "pedro",
    edad: 30,
    altura: 1.80,
}

for (let propiedad in persona) {
    console.log(propiedad, persona[propiedad]);// permite ver el nombre de la propriedad y el valor de todo del objeto
}

// recorrer con ler in un array
let animales = ['dragon', 'perro', 'gato', 'lobo'];
for (let indice in animales) { // el indice es el numero de la posicion (0)
    console.log(indice, animales[indice]);
}

// lo recomendable es usar for of