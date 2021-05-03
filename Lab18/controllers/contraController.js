const Usuario = require('../models/usuario');

exports.getRegPass = (request, response, next) => {
    let state = request.session.sesionLoginUser === undefined ? false : true;
    if(state){
        console.log("Ya loggeado intentando Reg Pssw");
        response.redirect('/');
        response.status(202);
    }else{
        response.render('RegPssw', {
            titulo: "Lab18-login-GAGM-DAW & BD",
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
    newUser.save()
        .then(() => {
            response.redirect('/login');
            response.status(302);
        }).catch(err => {
            console.log(err);
            response.redirect('/login/RegPssw');
        });    
};

exports.getValPass = (request, response, next) => {
    let state = request.session.sesionLoginUser === undefined ? false : true;
    if(state){
        console.log("Ya loggeado intentando Val Pssw");
        response.redirect('/');
        response.status(202);
    }else{
        response.render('ValidaPssw', {
            titulo: "Lab18-Validate-GAGM-DAW & BD",
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

    newUser.check()
        .then(([rows, fieldData]) => {
            if(rows.length !== 0){
                request.session.sesionLoginUser = rows[0].userName;
                console.log("Acceso concedido");
                response.redirect('/tienda');
                response.status(302);
                //window.alert("Contraseña correcta");
                
            }else{
                //console.log(newUser.toString());
                console.log("Acceso denegado");
                
                //window.alert("Contraseña incorrecta");
                response.redirect('/login/ValidaPssw');
                response.status(302);
            }
        }).catch(err => {
            console.log(err);
            response.redirect('/login/ValidaPssw');
        }); 
};

exports.getLogin = (request, response, next) => {
    let state = request.session.sesionLoginUser === undefined ? false : true;
    if(state){
        console.log("Ya loggeado intentando login");
        response.redirect('/');
        response.status(202);
    }else{
        response.render('login', {
            titulo: "Lab18-Enter-GAGM-DAW & BD",
            logged : state,
            act1: "",
            act2: "active",
            act3: "",
            act4: "",
        });
        console.log("login");
        /*Usuario.fetchAll()    
            .then(([rows, fieldData]) => {
                console.log(rows);
            })
            .catch(err => console.log(err));
        response.status(200);*/
    }
};