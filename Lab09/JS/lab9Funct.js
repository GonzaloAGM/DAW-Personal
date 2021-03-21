
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

var pushpinNav = document.getElementById('pushpinNav');
var pushpinNavOptions = {
    top: 300,
    bottom: 999999999,
    offset: 0
}
var instancePushpinNav = M.Pushpin.init(pushpinNav,pushpinNavOptions);

function password() {
    
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
      message = "Campo llenado correctamente";
    }
    document.getElementById("MessagePasword").innerHTML = message;
  }

  $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left'
    });
  });

 var articulos =  [
    ['Naranja', 0],
    ['Sandia', 0],
    ['Jicama', 0],
    ['Jitomate', 0],
    ['Chicharo', 0],
    ['Espinaca',0]
];

console.table(articulos);

function addArt(artNum){
    let nombre = "art" + (artNum+1);
    articulos[artNum][1] +=1;
    document.getElementById(nombre).innerHTML=articulos[artNum][1];
    console.table(articulos);
}

function subtractArt(artNum){
    let nombre = "art" + (artNum+1);
    if(articulos[artNum][1] !== 0)
        articulos[artNum][1] -=1;
    document.getElementById(nombre).innerHTML=articulos[artNum][1];
    console.table(articulos);
}

function subtotal(){
    const precios = [12,35,23,18,9,15];
    let subtotal=0;

    subtotal = articulos[0][1]*precios[0] + articulos[1][1]*precios[1] + articulos[2][1]*precios[2] +articulos[3][1]*precios[3]+articulos[4][1]*precios[4]+articulos[5][1]*precios[5];
    document.getElementById("subpago").innerHTML = "Subtotal: $" + subtotal;
    return subtotal;
}

function totalCompra(){

    let descuento = 0;
    let iva = 0;
    descuento = document.getElementById("descuento").value;
    iva = document.getElementById("iva").value;
    let total=0;
    let subtot = 0;
    subtot = subtotal();
    total = subtot*(100-descuento)/100;
    total += (total * iva)/100;
    document.getElementById("pago").innerHTML ="Descuento: " + descuento +'%<br>'+"IVA: " + iva +'%<br>'+ "Total: $" + total;
}

