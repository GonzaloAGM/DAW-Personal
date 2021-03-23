const express = require('express');
const app = express();
const router = express.Router();

const fs = require('fs');
const path = require('path');

const usuarios = [
    {nombreUsuario: 'Admin', contrasena: '1234'}, 
    {nombreUsuario: 'User', contrasena: 'noLeasEsto'}];

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

let specificPath = "";
let notFound = false;
let contentType = 'text/html';
let filePath = "";

//Middleware
app.use((request, response, next) => {
    specificPath = "";
    notFound = false;
    contentType = 'text/html';
    filePath = "";
    //Asignar filePath de donde recuperar el archivo html, lo que contenga dentro de él
    if(request.url === "/"){
        specificPath = "HTML/lab12.html";
    }else if(request.url === "/RegPssw"){
        specificPath = "HTML/RegPssw.html";
    }else if(request.url === "/ValidaPssw"){
        specificPath = "HTML/ValidaPssw.html";
    }else if(request.url === "/Recursos"){
        specificPath = "HTML/Recursos.html";
    }else{
        specificPath = request.url;
        notFound = true;
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
            "./",
            "HTML/Err404.html"
        );
    }

    next();
});

app.get('/', (request, response, next) => {
    response.writeHead(200, {'Content-Type': contentType});
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(response);
    console.log("en home");
    response.statusCode = 200;
});

app.get('/RegPssw', (request, response, next) => {
    response.writeHead(200, {'Content-Type': contentType});
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(response);
    console.log("Reg pass");
    console.log(usuarios);
    response.statusCode = 200;
});

app.post('/RegPssw', (request, response, next) => {
    console.log(request.body.username);
    console.log(request.body.pass);
    usuarios.push({nombreUsuario: username, contrasena: pass});
    user = "nombreUsuario: '" + username + "', contrasena: '" + pass + "\n";
    fs.writeFileSync('Lab12/login.txt', user, {encoding: "utf8", flag: "a+"});
    response.statusCode = 302;
    response.setHeader('Location', "/");
    response.end();
});

app.get('/ValidaPssw', (request, response, next) => {
    response.writeHead(200, {'Content-Type': contentType});
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(response);
    console.log("val pass");
    console.log(usuarios);
    response.statusCode = 200;
});

app.post('/ValidaPssw', (request, response, next) => {
    console.log(request.body.username);
    console.log(request.body.pass);
    const data = fs.readFileSync('Lab12/login.txt');
    if(data.includes("nombreUsuario: '"+ username +"', contrasena: '"+ pass)){
        console.log("Acceso concedido");
        response.statusCode = 302;
    }else{
        console.log("Acceso denegado");
        response.statusCode = 302;
    }
    response.setHeader('Location', "/");
    response.end();
});

app.use('/Recursos', (request, response, next) => {
    response.writeHead(200, {'Content-Type': contentType});
    const readStream = fs.createReadStream(filePath);
    console.log("Recursos");
    response.statusCode = 200;
    readStream.pipe(response);
});

app.use((request, response, next) => {
    if(notFound === true){
        response.writeHead(404, {'Content-Type': contentType});
        const readStream = fs.createReadStream(filePath);
        console.log("404");
        readStream.pipe(response);
    }else{
        response.writeHead(200, {'Content-Type': contentType});
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(response);
    }
});

app.listen(3000);