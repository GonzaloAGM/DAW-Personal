//Dependencias
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const csrf = require('csurf');
const csrfProtection = csrf();

//EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

//Rutas
const rutaUserValidation = require('./routes/userValidation');
const rutaTienda = require('./routes/tienda');
const rutaUsuarios = require('./routes/usuarios');
const isAuth = require('./util/is-auth');
const isAlreadAuth = require('./util/isAlread-auth');

//Controladores
const homeController = require('./controllers/lab20_controller');
const secret = require('./util/secret');

//Activa bodyparser
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
  secret: secret.secretSession,//'mi string secreto que debe ser un string aleatorio muy largo, no como éste, de preferencia que no tenga sentido' 
  resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
  saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

//Enviar archivos estáticos en carpeta public
app.use(express.static(path.join(__dirname, 'public')));

app.use(csrfProtection); 

app.use('/login', isAlreadAuth, rutaUserValidation);

app.use('/tienda', rutaTienda);

app.use('/Recursos', homeController.useRecursos);

app.use('/Usuarios', isAuth, rutaUsuarios);

app.get('/', homeController.useHome);

app.use(homeController.useNotFound);

app.listen(3000, function(){
    console.log("server is running in port 3000");
  });