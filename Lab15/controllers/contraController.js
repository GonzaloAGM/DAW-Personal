const fs = require('fs');

const usuarios = [
    {nombreUsuario: 'Admin', contrasena: '1234'}, 
    {nombreUsuario: 'User', contrasena: 'noLeasEsto'}];

exports.getRegPass = (request, response, next) => {
    response.render('RegPssw', {
        titulo: "Lab15-login-GAGM-DAW & BD",
        act1: "",
        act2: "active",
        act3: "",
        act4: "",
    });
    console.log("Reg Pssw");
    response.status(200);
};

exports.postRegPass = (request, response, next) => {
    let username = request.body.username;
    let pass = request.body.password;
    usuarios.push({nombreUsuario: username, contrasena: pass});
    user = "nombreUsuario: '" + username + "', contrasena: '" + pass + "\n";
    fs.writeFileSync('login.txt', user, {encoding: "utf8", flag: "a+"});
    response.status(302);
    response.redirect('/login');
};

exports.getValPass = (request, response, next) => {
    response.render('ValidaPssw', {
        titulo: "Lab15-login-GAGM-DAW & BD",
        act1: "",
        act2: "active",
        act3: "",
        act4: "",
    });
    console.log("Valida Pssw");
    response.status(200);    
};

exports.postValPass = (request, response, next) => {
    let username = request.body.username;
    let pass = request.body.pass;
    const data = fs.readFileSync('login.txt');
    if(data.includes("nombreUsuario: '"+ username +"', contrasena: '"+ pass)){
        console.log("Acceso concedido");
        response.status(302);
        //window.alert("Contraseña correcta");
        response.redirect('/tienda');
    }else{
        console.log("nombreUsuario: '"+ username +"', contrasena: '"+ pass);
        console.log("Acceso denegado");
        response.status(302);
        //window.alert("Contraseña incorrecta");
        response.redirect('/login/ValidaPssw');
    }
    response.end();
};

exports.getLogin = (request, response, next) => {
    response.render('login', {
        titulo: "Lab14-login-GAGM-DAW & BD",
        act1: "",
        act2: "active",
        act3: "",
        act4: "",
    });
    console.log("login");    
    console.log(usuarios);
    response.status(200);
};