const Usuario = require('../models/usuario');

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
    const newUser = new Usuario (request.body.username, request.body.password);
    newUser.save();

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
    const newUser = new Usuario (request.body.username, request.body.password);

    if(newUser.check()){
        console.log("Acceso concedido");
        response.status(302);
        //window.alert("Contraseña correcta");
        response.redirect('/tienda');
    }else{
        console.log(newUser.toString());
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
    console.log(Usuario.fetchAll());
    response.status(200);
};