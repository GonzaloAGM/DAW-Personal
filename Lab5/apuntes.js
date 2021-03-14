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
clientes.push('A');
clientes.push('B');

console.log(clientes);

for(let i=0; i<clientes.length; i++){
    console.log(clientes[i]);
}

for(let cliente of clientes){
    console.log(cliente);
}

const menu = [];
menu.push({nombre: 'El Paisa', precio: 22});
menu.push({nombre: 'El tacoqueso', precio: 29});

console.log(menu);

function calcular_cuenta (tacos){
    return tacos*22;
}

console.log('La cuenta es de: $' + calcular_cuenta(7));

window.alert('Hola, bienbenido a la pagina');

const ordenar = window.confirm('Desea ordenar?');
if(ordenar){
    const num_tacos = window.prompt('¿Cuantos tacos vas a querer?')
    
    const calcular_cuenta2 = (tacos) => tacos*22;

    console.log('La cuenta es de: $' + calcular_cuenta2(num_tacos));
}



