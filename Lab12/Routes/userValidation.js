const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

const fs = require('fs');
const path = require('path');

const usuarios = [
    {nombreUsuario: 'Admin', contrasena: '1234'}, 
    {nombreUsuario: 'User', contrasena: 'noLeasEsto'}];

let specificPath = "";
let notFound = false;
let contentType = 'text/html';
let filePath = "";

router.use((request, response, next) => {
    specificPath = "";
    notFound = false;
    contentType = 'text/html';
    filePath = "";

    //Asignar filePath de donde recuperar el archivo html, lo que contenga dentro de él
    if(request.url === "/"){
        specificPath = "HTML/login.html";
    }else if(request.url === "/RegPssw"){
        specificPath = "HTML/RegPssw.html";
    }else if(request.url === "/ValidaPssw"){
        specificPath = "HTML/ValidaPssw.html";
    }else{
        specificPath = request.url;
        notFound = true;
    }

    filePath = path.join(
        __dirname,
        "../",
        specificPath
    );

    //Abre el archivo de la forma correcta
    let extName = path.extname(filePath);

    switch (extName) {
        case '.css':
            contentType = 'text/css';
            notFound = false;
            break;
        case '.js':
            contentType = 'text/javascript';
            notFound = false;
            break;
        case '.json':
            contentType = 'application/json';
            notFound = false;
            break;
        case '.png':
            contentType = 'image/png';
            notFound = false;
            break;
        case '.jpg':
            contentType = 'image/jpg';
            notFound = false;
            break;
    }

    if(notFound === true){
        filePath = path.join(
            __dirname,
            "../",
            "HTML/Err404.html"
        );
    }

    next();
});

router.get('/', (request, response, next) => {
    response.writeHead(200, {'Content-Type': contentType});
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(response);
    console.log("login");
    console.log(usuarios);
    response.status(200);
});

router.get('/RegPssw', (request, response, next) => {
    response.writeHead(200, {'Content-Type': contentType});
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(response);
    console.log("Reg pass");
    console.log(usuarios);
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
    response.writeHead(200, {'Content-Type': contentType});
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(response);
    console.log("val pass");
    console.log(usuarios);
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

router.use((request, response, next) => {
    if(notFound === true){
        response.writeHead(404, {'Content-Type': contentType});
        const readStream = fs.createReadStream(filePath);
        response.status(404);
        console.log("404");
        readStream.pipe(response);
    }else{
        response.writeHead(200, {'Content-Type': contentType});
        const readStream = fs.createReadStream(filePath);
        response.status(302);
        readStream.pipe(response);
    }
    //response.send('Petición terminada');
});

module.exports = router;