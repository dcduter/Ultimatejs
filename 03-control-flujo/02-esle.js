condicionales 
let edad = 15; 


// el codigo se ejecuta de arriba hacia abajo
if (edad >= 18) {
    console.log('puedes ingresar');// se ejecuta si la condicion es verdadera
} else if (edad >= 13) {
    console.log('Usuari debe ingresar con un adulto');
}
else {
     console.log ("Usuario menor de edad");// se ejecuta si la condicion es falsa
}