//Dependencias
const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

//Controladores
const tiendaController = require('../controllers/tiendaController');

//Activa bodyparser
router.use(bodyParser.urlencoded({extended: false}));

//Enviar archivos estáticos en carpeta public
router.use(express.static(path.join(__dirname,'..', 'public')));

router.use('/Total', tiendaController.useTotal);

router.get('/', tiendaController.getTienda);

router.post('/', tiendaController.postTienda);

module.exports = router;