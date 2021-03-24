const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

const fs = require('fs');
const path = require('path');

let specificPath = "";
let notFound = false;
let contentType = 'text/html';
let filePath = "";

let descuento = 0;
let iva = 0;
let total=0;
let subtot = 0;

router.use((request, response, next) => {
    specificPath = "";
    notFound = false;
    contentType = 'text/html';
    filePath = "";

    //Asignar filePath de donde recuperar el archivo html, lo que contenga dentro de él
    if(request.url === "/"){
        specificPath = "HTML/tienda.html";
    }else if(request.url === "/Total"){
        specificPath = "HTML/TotalTienda.html";
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
    console.log("Tienda");
    response.status(200);
});

router.post('/', (request, response, next) => {
    descuento = request.body.descuento;
    iva = request.body.iva;
    total=0;
    console.log(request.body.art1);
    let costo1 = 12 * request.body.art1;
    let costo2 = 35 * request.body.art2;
    let costo3 = 23 * request.body.art3;
    let costo4 = 18 * request.body.art4;
    let costo5 =  9 * request.body.art5;
    let costo6 = 15 * request.body.art6;
    subtot = costo1 + costo2 + costo3 + costo4 + costo5 + costo6;
    total = subtot*(100-descuento)/100;
    total += (total * iva)/100;
    
    //console.log("Costo 1 : " + costo1 + " | Costo 2 : " + costo2);
    //console.log("Subtotal: " + subtot + " | Total: $" + total);
    response.setHeader('Location', "/tienda/Total");
    response.status(302);
    response.end();
});

router.use('/Total', (request, response, next) => {
    response.writeHead(200, {'Content-Type': contentType});
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(response);
    console.log("Total Tienda");
    //response.send("Descuento: " + descuento +"%");
    //request.body.descuento = "Descuento: " + descuento +"%";
    //request.body.iva = "IVA: " + iva +"%";
    //request.body.subtotal = "Subtotal: " + subtot +"%";
    //request.body.total = "Total: " + total +"%";
    console.log("Descuento: " + descuento + " | IVA: " + iva +" | Total: $" + total);
    response.status(201);
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