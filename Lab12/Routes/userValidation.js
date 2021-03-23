const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const fs = require('fs');
const path = require('path');

const usuarios = [
    {nombreUsuario: 'Admin', contrasena: '1234'}, 
    {nombreUsuario: 'User', contrasena: 'noLeasEsto'}];

let specificPath = "";
let contentType = 'text/html';
let filePath = "";

router.use((request, response, next) => {
    specificPath = "";
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
    }

    filePath = path.join(
        __dirname,
        "./",
        specificPath
    );

    //Abre el archivo de la forma correcta
    let extName = path.extname(filePath);

    switch (extName) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            notFound = false;
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
    console.log(request.body.username);
    console.log(request.body.pass);
    usuarios.push({nombreUsuario: username, contrasena: pass});
    user = "nombreUsuario: '" + username + "', contrasena: '" + pass + "\n";
    fs.writeFileSync('Lab12/login.txt', user, {encoding: "utf8", flag: "a+"});
    response.status(302);
    response.setHeader('Location', "/");
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
    console.log(request.body.username);
    console.log(request.body.pass);
    const data = fs.readFileSync('Lab12/login.txt');
    if(data.includes("nombreUsuario: '"+ username +"', contrasena: '"+ pass)){
        console.log("Acceso concedido");
        response.status(302);
        response.setHeader('Location', "/tienda");
    }else{
        console.log("Acceso denegado");
        response.status(403);
        response.setHeader('Location', "/");
    }
    response.end();
});

router.use((request, response, next) => {
    response.writeHead(200, {'Content-Type': contentType});
    const readStream = fs.createReadStream(filePath);
    response.status(302);
    readStream.pipe(response);
    //response.send('Petición terminada');
});

module.exports = router;