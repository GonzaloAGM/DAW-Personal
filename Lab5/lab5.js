console.log('Hola, mundo!');

const precio = 22;

console.info('El precio de los tacos es de $' + precio);

let cantidad_tacos = 4;

console.log('Te voy a mandar ' + cantidad_tacos + ' tacos');

let persona = "Lalo";

let descuento = 0;

if(cantidad_tacos > 6 && persona === "Lalo"){
    descuento = 0.1*(cantidad_tacos*precio);
    console.info('Se te hizo un descuento de $' + descuento)
}

const por_pagar= cantidad_tacos * precio - descuento;

const clientes = [];

clientes.push('Lalo');

console.log(clientes);