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

  function pay(){
    const  articulos = [];
    const precio = [15,50,20,25,5,20];
    articulos.push(document.getElementById("art1").value);
    articulos.push(document.getElementById("art2").value);
    articulos.push(document.getElementById("art3").value);
    articulos.push(document.getElementById("art4").value);
    articulos.push(document.getElementById("art5").value);
    articulos.push(document.getElementById("art6").value);
    articulos.push(document.getElementById("descuento").value);
    articulos.push(document.getElementById("iva").value);
    let total;

    for(let subtotal of precio)

    total = (pan*15+carne*50+ jitomate*20+ lechuga * 15 + tortillas * 5 + cafe * 20)*(1-descuento/100);
    total = total + (total * iva)/100;
    document.getElementById("pago").innerHTML = "Total: $" + total;
}