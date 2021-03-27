const express = require('express');
const router = express.Router();

const path = require('path');

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

const fs = require('fs');

const usuarios = [
    {nombreUsuario: 'Admin', contrasena: '1234'}, 
    {nombreUsuario: 'User', contrasena: 'noLeasEsto'}];

//Enviar archivos estáticos en carpeta public
router.use(express.static(path.join(__dirname,'..', 'public')));

router.get('/RegPssw', (request, response, next) => {
    response.render('RegPssw', {
        titulo: "Lab14-login-GAGM-DAW & BD",
        act1: "",
        act2: "active",
        act3: "",
        act4: "",
    });
    console.log("Reg Pssw");
    response.status(200);
});

router.post('/RegPssw', (request, response, next) => {
    let username = request.body.username;
    let pass = request.body.password;
    usuarios.push({nombreUsuario: username, contrasena: pass});
    user = "nombreUsuario: '" + username + "', contrasena: '" + pass + "\n";
    fs.writeFileSync('login.txt', user, {encoding: "utf8", flag: "a+"});
    response.status(302);
    response.setHeader('Location', "/login");
    response.end();
});

router.get('/ValidaPssw', (request, response, next) => {
    response.render('ValidaPssw', {
        titulo: "Lab14-login-GAGM-DAW & BD",
        act1: "",
        act2: "active",
        act3: "",
        act4: "",
    });
    console.log("Valida Pssw");
    response.status(200);    
});

router.post('/ValidaPssw', (request, response, next) => {
    let username = request.body.username;
    let pass = request.body.pass;
    const data = fs.readFileSync('login.txt');
    if(data.includes("nombreUsuario: '"+ username +"', contrasena: '"+ pass)){
        console.log("Acceso concedido");
        response.status(302);
        response.setHeader('Location', "/tienda");
    }else{
        console.log("nombreUsuario: '"+ username +"', contrasena: '"+ pass);
        console.log("Acceso denegado");
        response.status(403);
        response.setHeader('Location', "/");
    }
    response.end();
});

router.get('/', (request, response, next) => {
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
});

module.exports = router;