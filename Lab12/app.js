const express = require('express');
const app = express();
const router = express.Router();

const rutaUserValidation = require('./routes/userValidation');
const rutaTienda = require('./routes/tienda');

const fs = require('fs');
const path = require('path');

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

app.use('/login', rutaUserValidation);

app.use('/tienda', rutaTienda);

app.use('/Recursos', (request, response, next) => {
    response.writeHead(200, {'Content-Type': contentType});
    const readStream = fs.createReadStream(filePath);
    console.log("Recursos");
    response.status(200);
    readStream.pipe(response);
});

app.get('/', (request, response, next) => {
    response.writeHead(200, {'Content-Type': contentType});
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(response);
    console.log("en home");
    response.status(200);
});

app.use((request, response, next) => {
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

app.listen(3000, function(){
    console.log("server is running in port 3000");
  });