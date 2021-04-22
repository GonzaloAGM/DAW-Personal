//Dependencias
const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

//Controladores
const contraController = require('../controllers/contraController');

//Activa bodyparser
router.use(bodyParser.urlencoded({extended: false}));

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