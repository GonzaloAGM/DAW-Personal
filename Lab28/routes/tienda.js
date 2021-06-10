//Dependencias
const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

//imports
const isAuth = require('../util/is-auth');
const csurfMiddleware = require('../util/csurfjs');

//Controladores
const tiendaController = require('../controllers/tiendaController');

//Activa bodyparser
router.use(bodyParser.urlencoded({extended: false}));
router.use(cookieParser());

//Enviar archivos estáticos en carpeta public
router.use(express.static(path.join(__dirname,'..', 'public')));

router.use(csurfMiddleware);

router.use('/Total', isAuth, tiendaController.useTotal);

router.use('/Records', isAuth, tiendaController.getRecords);

router.use('/:Articulos_nombre', tiendaController.getArticulo);

router.get('/', tiendaController.getTienda);

router.post('/', isAuth, tiendaController.postTienda);

module.exports = router;