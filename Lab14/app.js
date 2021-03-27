const express = require('express');
const app = express();

const rutaUserValidation = require('./routes/userValidation');
const rutaTienda = require('./routes/tienda');

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//Enviar archivos estáticos en carpeta public
app.use(express.static(path.join(__dirname, 'public')));

let contentType = 'text/html';
let filePath = "";

//Middleware
app.use((request, response, next) => {
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

app.use('/login', rutaUserValidation);

app.use('/tienda', rutaTienda);

app.use('/Recursos', (request, response, next) => {
    response.writeHead(200, {'Content-Type': contentType})
    response.render('Recursos', {
        titulo: "Lab14-Recursos-GAGM-DAW & BD",
        act1: "",
        act2: "",
        act3: "",
        act4: "active",
    });
    console.log("Recursos");
});

app.get('/', (request, response, next) => {
    //filePath = path.join(__dirname,'..','views','lab14.html');
    //response.writeHead(200, {'Content-Type': contentType});
    //response.sendFile(filePath);
    response.writeHead(200, {'Content-Type': contentType})
    response.render('lab14', {
        titulo: "Lab14-GAGM-DAW & BD",
        act1: "active",
        act2: "",
        act3: "",
        act4: "",
    });
    console.log("en home");
});

app.use((request, response, next) => {
    response.writeHead(404, {'Content-Type': contentType})
    response.render('Err404', {
        titulo: "Lab14-404-GAGM-DAW & BD",
        act1: "",
        act2: "",
        act3: "",
        act4: "",
    });
    console.log("404");
});

app.listen(3000, function(){
    console.log("server is running in port 3000");
  });