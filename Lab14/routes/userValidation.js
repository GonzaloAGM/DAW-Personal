const express = require('express');
const router = express.Router();

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const fs = require('fs');

const usuarios = [
    {nombreUsuario: 'Admin', contrasena: '1234'}, 
    {nombreUsuario: 'User', contrasena: 'noLeasEsto'}];

let contentType = 'text/html';
let filePath = "";

router.use((request, response, next) => {
    contentType = 'text/html';
    filePath = '';

    filePath = path.join(__dirname,'..',request.url);

    let extName = path.extname(request.url);

    switch (extName) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    next();
});

router.get('/RegPssw', (request, response, next) => {
    response.writeHead(200, {'Content-Type': contentType})
    response.render('RegPssw', {
        titulo: "Lab14-login-GAGM-DAW & BD",
        act1: "",
        act2: "active",
        act3: "",
        act4: "",
    });
    console.log("Reg Pssw");    
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
    response.writeHead(200, {'Content-Type': contentType})
    response.render('ValidaPssw', {
        titulo: "Lab14-login-GAGM-DAW & BD",
        act1: "",
        act2: "active",
        act3: "",
        act4: "",
    });
    console.log("Valida Pssw");    
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
    response.writeHead(200, {'Content-Type': contentType})
    response.render('login', {
        titulo: "Lab14-login-GAGM-DAW & BD",
        act1: "",
        act2: "active",
        act3: "",
        act4: "",
    });
    console.log("login");    
    console.log(usuarios);
});

module.exports = router;