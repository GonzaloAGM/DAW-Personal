const express = require('express');
const router = express.Router();

const path = require('path');

const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())

let descuento = 0;
let iva = 0;
let total=0;
let subtot = 0;

const articulos = [
    {
        nombreMayus: 'NARANJA',
        nombre: 'Naranja',
        descripcion:    'Las naranjas brindan un aporte importante de vitamina C. <br><br>Promueve niveles saludables de azúcar en sangre.<br><br>$12.00/k',
        imagen: './IMG/naranja.png',
        precio: 12,
        num: '0'
    },
    {
        nombreMayus: 'SANDIA',
        nombre: 'Sandia',
        descripcion:    'La sandía es una planta anual y la mayoría de las variedades se pueden cosechar 80-100 días después de la siembra. <br><br> Se cree que los egeipcios fueron los primero en cultivarla a gran escala.<br><br>$35.00/k',
        imagen: './IMG/sandia.jpg',
        precio: 35,
        num: '1'
    },
    {
        nombreMayus: 'JICAMA',
        nombre: 'Jicama',
        descripcion:    'Es una legumbre, tambien llamada tubérculo.<br><br> Las vainas son tóxicas, pero la raiz es 100% comestible.<br><br> Hay registros de su consumo de las culturas tolteca, mexica, maya y zapoteca.<br><br> $23.00/k',
        imagen: './IMG/jicama.png',
        precio: 23,
        num: '2'
    },
    {
        nombreMayus: 'JITOMATE',
        nombre: 'Jitomate',
        descripcion:    'Las naranjas brindan un aporte importante de vitamina C. <br><br> Promueve niveles saludables de azúcar en sangre.<br><br> $12.00/k',
        imagen: './IMG/jitomate.jpg',
        precio: 18,
        num: '3'
    },
    {
        nombreMayus: 'CHICHARO',
        nombre: 'Chicharo',
        descripcion:    'Las naranjas brindan un aporte importante de vitamina C. <br><br> Promueve niveles saludables de azúcar en sangre.<br><br> $12.00/k',
        imagen: './IMG/chicharo.jpg',
        precio: 9,
        num: '4'
    },
    {
        nombreMayus: 'ESPINACA',
        nombre: 'Espinaca',
        descripcion:    'Las naranjas brindan un aporte importante de vitamina C. <br><br> Promueve niveles saludables de azúcar en sangre.<br><br> $12.00/k',
        imagen: './IMG/espinaca.jpg',
        precio: 15,
        num: '5'
    },
];


//Enviar archivos estáticos en carpeta public
router.use(express.static(path.join(__dirname,'..', 'public')));

router.use('/Total', (request, response, next) => {
    response.render('TotalTienda', {
        titulo: "Lab14-Tienda-GAGM-DAW & BD",
        act1: "",
        act2: "",
        act3: "active",
        act4: "",
        Descuento: descuento,
        IVA: iva,
        Subtotal: subtot,
        Total: total,
    });
    console.log("Total tienda");
    //console.log("Descuento: " + descuento + " | IVA: " + iva +" | Total: $" + total);
    response.status(201);
});


router.get('/', (request, response, next) => {
    response.render('tienda', {
        titulo: "Lab14-Tienda-GAGM-DAW & BD",
        act1: "",
        act2: "",
        act3: "active",
        act4: "",
        articulos: articulos
    });
    console.log("Tienda");
    response.status(200);
});

router.post('/', (request, response, next) => {
    descuento = request.body.descuento;
    iva = request.body.iva;
    subtot = 0;
    total = 0;
    subtot=request.body.subtinput;
    total = subtot*(100-descuento)/100;
    total += (total * iva)/100;

    //console.log("Subtotal: " + subtot + " | Total: $" + total);
    response.redirect('/tienda/Total');
    response.status(302);
    response.end();
});

router.use(function (req, res) {
    console.log(JSON.stringify(req.body, null, 2));
  })

module.exports = router;