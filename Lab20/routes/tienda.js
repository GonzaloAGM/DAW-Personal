//Dependencias
const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const isAuth = require('../util/is-auth');

//Controladores
const tiendaController = require('../controllers/tiendaController');

//Activa bodyparser
router.use(bodyParser.urlencoded({extended: false}));
router.use(cookieParser());
router.use(session({
    secret: '1d#$%dwe45f#$5sd()=df345#$%bLim&dfvdfg#$12qex%RT(?ipfgh5dvfgdewt56ytbru9',//'mi string secreto que debe ser un string aleatorio muy largo, no como éste, de preferencia que no tenga sentido' 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
  }));

//Enviar archivos estáticos en carpeta public
router.use(express.static(path.join(__dirname,'..', 'public')));

router.use('/Total', isAuth, tiendaController.useTotal);

router.use('/:Articulos_nombre', tiendaController.getArticulo);

router.get('/', tiendaController.getTienda);

router.post('/', isAuth, tiendaController.postTienda);

module.exports = router;