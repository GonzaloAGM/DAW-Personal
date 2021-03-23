const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

const fs = require('fs');
const path = require('path');

let specificPath = "";
let contentType = 'text/html';
let filePath = "";

router.use((request, response, next) => {
    specificPath = "";
    contentType = 'text/html';
    filePath = "";

    //Asignar filePath de donde recuperar el archivo html, lo que contenga dentro de él
    if(request.url === "/"){
        specificPath = "HTML/tienda.html";
    }else if(request.url === "/Total"){
        specificPath = "HTML/TotalTienda.html";
    }else{
        specificPath = request.url;
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

router.get('/', (request, response, next) => {
    response.writeHead(200, {'Content-Type': contentType});
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(response);
    console.log("Tienda");
    response.status(200);
});

router.post('/', (request, response, next) => {
    //Por hacer
});

router.get('/Total', (request, response, next) => {
    //Por hacer
});

router.use((request, response, next) => {
    response.writeHead(200, {'Content-Type': contentType});
    const readStream = fs.createReadStream(filePath);
    response.status(302);
    readStream.pipe(response);
    //response.send('Petición terminada');
});

module.exports = router;