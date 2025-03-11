// creamo un objeto persona
const usuario = {
    edad: 13,
    nombre: 'Fernando',
    pais: 'Colombia',
    ticket: true,
}

// Corrected if statement
if (usuario.ticket === true && usuario.edad >= 18) {
    console.log(`Bienvenido ${usuario.nombre} a la fiesta`);
} else {
    console.log(`Lo siento ${usuario.nombre} no puedes entrar a la fiesta`);
}

// con operador ternario
const mensaje = usuario.ticket === true && usuario.edad >= 18 ? `Bienvenido ${usuario.nombre} a la fiesta` : `Lo siento ${usuario.nombre} no puedes entrar`;
