/* seleccionar contenido 
todos los selectores comienzan por document.(metodo) */
//querySelector
// se selecciona similar a css
const headin = document.querySelector('h2');// selecciona un elemento a la vez
headin.textContent = 'Hola Mundo';// se modifica con los diferentes metodos




//querySelectoAll
// selecciona todos los elementos
const enlaces = document.querySelectorAll('.navegacion a '); // selecciona todos los enlaces dentro de navegacion
enlaces[0].textContent = 'Hola Mundo';// se modifica con los diferentes metodos
enlaces[1].textContent = 'Hola Mundo 2';
enlaces[0].href = 'google.com'; // se modifica en el atributo href





//getElementById