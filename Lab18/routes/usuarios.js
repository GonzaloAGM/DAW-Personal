//Dependencias
const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosController');

router.get('/logout',usuariosController.logout);

module.exports = router;