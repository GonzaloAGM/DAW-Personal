//Dependencias
const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

//Controladores
const contraController = require('../controllers/contraController');

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

//Enviar archivos estáticos en carpeta public
router.use(express.static(path.join(__dirname,'..', 'public')));

router.get('/RegPssw', contraController.getRegPass);

router.post('/RegPssw', contraController.postRegPass);

router.get('/ValidaPssw', contraController.getValPass);

router.post('/ValidaPssw', contraController.postValPass);

router.get('/', contraController.getLogin);

module.exports = router;