const Usuario = require('../models/usuario');

exports.getRegPass = (request, response, next) => {
    let state = request.session.sesionLoginUser === undefined ? false : true;
    if(state){
        console.log("Ya loggeado intentando Reg Pssw");
        response.redirect('/');
        response.status(202);
    }else{
        response.render('RegPssw', {
            titulo: "Lab17-login-GAGM-DAW & BD",
            logged : state,
            act1: "",
            act2: "active",
            act3: "",
            act4: "",
        });
        console.log("Reg Pssw");
        response.status(200);
    }
};

exports.postRegPass = (request, response, next) => {
    const newUser = new Usuario (request.body.username, request.body.password);
    newUser.save();

    response.status(302);
    response.redirect('/login');
};

exports.getValPass = (request, response, next) => {
    let state = request.session.sesionLoginUser === undefined ? false : true;
    if(state){
        console.log("Ya loggeado intentando Val Pssw");
        response.redirect('/');
        response.status(202);
    }else{
        response.render('ValidaPssw', {
            titulo: "Lab17-Validate-GAGM-DAW & BD",
            logged : state,
            act1: "",
            act2: "active",
            act3: "",
            act4: "",
        });
        console.log("Valida Pssw");
        response.status(200);    
    }  
};

exports.postValPass = (request, response, next) => {
    var nombreUsuario = request.body.username;
    const newUser = new Usuario (nombreUsuario, request.body.pass);

    response.setHeader('Set-Cookie', 'userNameCook='+ nombreUsuario +'; HttpOnly');

    console.log(request.cookies.userNameCook);

    if(newUser.check()){
        request.session.sesionLoginUser = nombreUsuario;
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
    let state = request.session.sesionLoginUser === undefined ? false : true;
    if(state){
        console.log("Ya loggeado intentando login");
        response.redirect('/');
        response.status(202);
    }else{
        response.render('login', {
            titulo: "Lab17-Enter-GAGM-DAW & BD",
            logged : state,
            act1: "",
            act2: "active",
            act3: "",
            act4: "",
        });
        console.log("login");    
        console.log(Usuario.fetchAll());
        response.status(200);
    }
};