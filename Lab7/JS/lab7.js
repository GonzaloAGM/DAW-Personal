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

  function totalCompra(){
    const  articulos = [];
    const precios = [12,35,23,18,9,15];
    const cant_art = 6;
    
    for(let i=0; i<6 ; i++){
        let nombre = "art" + (i+1);
        articulos.push(document.getElementById(nombre).value);
    }

    let descuento = document.getElementById("descuento").value;
    let iva = document.getElementById("iva").value;
    let total=0;

    for(let i=0; i<articulos.length ; i++){
        total += articulos[i]*precios[i];
    }
    total *= (100-descuento)/100;
    total += (total * iva)/100;
    document.getElementById("pago").innerHTML = "Total: $" + total;
}