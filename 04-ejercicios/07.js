/* 
crear una funcion que devuelva el precion del producto mas impuesto */

function precioTotal (precio, impuesto){
    return precio + precio * impuesto;
}

let resultado =precioTotal(34000, 0.19);
console.log(`Precio total: $${resultado} pesos`);