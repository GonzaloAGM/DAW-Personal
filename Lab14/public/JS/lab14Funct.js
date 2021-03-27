var pushpinNav = document.getElementById('pushpinNav');
var pushpinNavOptions = {
    top: 300,
    bottom: 999999999,
    offset: 0
}
var instancePushpinNav = M.Pushpin.init(pushpinNav,pushpinNavOptions);

function passwordVal() {
    
    var password = document.getElementById("password").value;
    var passwordcheck = document.getElementById("passworcheck").value;
    var message;
    if(password===""){
        message = "Por favor introduce tu password";
    }
    else if(password.length<8){
        message = "Tu password tiene que tener al menos 8 caracteres";
    }
    else if(!(password.match(/[a-z]/g))){
        message = "Tu password tiene que tener al menos una letra minuscula";
    }
    else if(!(password.match(/[A-Z]/g))){
        message = "Tu password tiene que tener al menos una letra mayuscula";
    }
    else if(!(password.match(/[0-9]/g))){
        message = "Tu password tiene que tener al menos un número";
    }
    else if(!(password.match("=") ||
            password.includes("°") ||
            password.includes("¬") ||
            password.includes("¿") ||
            password.includes("¨") ||
            password.includes("~") ||
            password.includes("{") ||
            password.includes("}") ||
            password.includes("#") ||
            password.includes("$") ||
            password.includes("%") ||
            password.includes("&") ||
            password.includes(":") ||
            password.includes(",") ||
            password.includes(";") ||
            password.includes("_") ||
            password.includes("-") ||
            password.includes("/") ||
            password.includes("!"))){
        message = "Tu pasword debe de tener al menos uno de los siguientes simbolos especiales: = ° ¬ ¿ ¨ ~ { } # $ % & : , ; _ - / !";
    }
    else if(passwordcheck===""){
        message = "Por favor confirma tu password";
    }
    else if(password !== passwordcheck){
      message="Los campos no coinciden";
    }
    else if(password === passwordcheck){
      message = '<br>';
    }
    document.getElementById("MessagePasword").innerHTML = message;
  }

  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left'
    });
  });

const listaArti = [
        {
        nombre: 'Naranja', 
        cantidad : 0, 
        precio: 12
        },
        {
        nombre: 'Sandia', 
        cantidad : 0, 
        precio: 35
        },
        {
        nombre: 'Jicama', 
        cantidad : 0, 
        precio: 23
        },
        {
        nombre: 'Jitomate', 
        cantidad : 0, 
        precio: 18
        },
        {
        nombre: 'Chicharo', 
        cantidad : 0, 
        precio: 9
        },
        {
        nombre: 'Espinaca', 
        cantidad : 0, 
        precio: 15
        },
    ];

console.table(listaArti);

function addArt(artNum){
    let nombre = "" + artNum;
    let nombreInput = "input" + artNum;
    console.log(nombreInput);
    listaArti[artNum].cantidad +=1;
    document.getElementById(nombre).innerHTML=listaArti[artNum].cantidad;
    document.getElementsByName(nombreInput).value=listaArti[artNum].cantidad;
    console.table(listaArti);
}

function subtractArt(artNum){
    let nombre = "" + artNum;
    let nombreInput = "input" + artNum;
    if(listaArti[artNum].cantidad !== 0)
    listaArti[artNum].cantidad -=1;
    document.getElementById(nombre).innerHTML=listaArti[artNum].cantidad;
    document.getElementById(nombreInput).value=listaArti[artNum].cantidad;
    console.table(listaArti);
}

function subtotal(){
    let subtotal=0;
    for(let art of listaArti){
        subtotal += art.cantidad*art.precio;
    }

    document.getElementById("subtinput").value = subtotal;
    console.log(document.getElementById("subtinput").value);
    document.getElementById("subpago").innerHTML = "Subtotal: $" + subtotal;
    return subtotal;
}