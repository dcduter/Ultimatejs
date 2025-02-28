//condicionales 
let edad = 11; 

console.log ("condicional if, esle if y else");

// el codigo se ejecuta de arriba hacia abajo
if (edad >= 18) {
    console.log('puedes ingresar');// se ejecuta si la condicion es verdadera
} else if (edad >= 13) {
    console.log('Usuario debe ingresar con un adulto');
}
else {
     console.log ("Usuario menor de edad, no puedes ingresar");// se ejecuta si la condicion es falsa
}