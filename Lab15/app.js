//Dependencias
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

//Rutas
const rutaUserValidation = require('./routes/userValidation');
const rutaTienda = require('./routes/tienda');

//Controladores
const homeController = require('./controllers/lab15_controller');

//Activa bodyparser
app.use(bodyParser.urlencoded({extended: false}));

//Enviar archivos estáticos en carpeta public
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', rutaUserValidation);

app.use('/tienda', rutaTienda);

app.use('/Recursos', homeController.useRecursos);

app.get('/', homeController.useHome);

app.use(homeController.useNotFound);

app.listen(3000, function(){
    console.log("server is running in port 3000");
  });