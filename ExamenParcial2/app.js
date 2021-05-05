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
//const rutaUsuarios = require('./routes/usuarios');
//const isAuth = require('./util/is-auth');

//Controladores
const regController = require('./controllers/registrarIncidente'); //------------------------------------------------
const consController = require('./controllers/consultarIncidente'); //------------------------------------------------
const csrfMiddleware = require('./util/csurfjs');

//Activa bodyparser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: '1d#$%dwe45f#$5sd()=df345#$%bLim&dfvdfg#$12qex%RT(?ipfgh5dvfgdewt56ytbru9',//mi string secreto  
  resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
  saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

//Enviar archivos estáticos en carpeta public
app.use(express.static(path.join(__dirname, 'public')));

app.use(csrfProtection);
app.use(csrfMiddleware);

app.get('/', regController.getHome);

app.post('/', consController.regIncidente);

app.get('/buscar/:criterio', consController.getBuscar);

app.use(regController.useNotFound);

app.listen(3000, function(){
    console.log("server is running in port 3000");
  });