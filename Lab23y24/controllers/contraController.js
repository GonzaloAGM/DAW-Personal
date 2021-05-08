const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');

exports.getRegPass = (request, response, next) => {
    let state = request.session.isLoggedIn === undefined ? false : true;
    response.render('RegPssw', {
        titulo: "Lab20-login-GAGM-DAW & BD",
        error: request.session.err === undefined ? false : request.session.err,
        logged : state,
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

    request.session.err = undefined;

    newUser.save()
        .then(() => {
            response.redirect('/login');
            response.status(302);
        }).catch(err => {
            console.log(err);
            request.session.err = 'Ingresa otro nombre de usuario';
            response.redirect('/login/RegPssw');
        });    
};

exports.getValPass = (request, response, next) => {
    let state = request.session.isLoggedIn === undefined ? false : true;
    response.render('ValidaPssw', {
        titulo: "Lab20-Validate-GAGM-DAW & BD",
        error: request.session.err === undefined ? false : request.session.err,
        logged : state,
        act1: "",
        act2: "active",
        act3: "",
        act4: "",
    });
    console.log("Valida Pssw");
    response.status(200);     
};

exports.postValPass = (request, response, next) => {

    request.session.err = undefined;
    Usuario.fetchOne(request.body.username)
        .then(([rows, fieldData]) => {
            console.log(rows);
            console.log(rows[0].userPssw);
            bcrypt.compare(request.body.pass, rows[0].userPssw)
                .then(doMatch => {
                    if (doMatch) {
                        request.session.isLoggedIn = true;
                        request.session.sesionLoginUser = rows[0].userName;
                        return request.session.save(err => {
                            console.log("Acceso concedido");
                            response.redirect('/tienda');
                            response.status(302);
                        });
                    }
                    request.session.err = 'Usuario y/o contraseña incorrectos';
                    console.log("Acceso denegado");
                    response.redirect('/login/ValidaPssw');
                    response.status(302);
                }).catch(err => {
                    console.log("Error al hacer compare");
                    response.redirect('/login/ValidaPssw');
                    request.session.err = 'Usuario y/o contraseña incorrectos';
                });
        }).catch(err => {
            console.log(err);
            console.log("Error al hacer consulta");
            request.session.err = 'Usuario y/o contraseña incorrectos';
            response.redirect('/login/ValidaPssw');
        });
};

exports.getLogin = (request, response, next) => {
    let state = request.session.isLoggedIn === undefined ? false : true;
    response.render('login', {
        titulo: "Lab20-Enter-GAGM-DAW & BD",
        logged : state,
        act1: "",
        act2: "active",
        act3: "",
        act4: "",
    });
    console.log("login");
};