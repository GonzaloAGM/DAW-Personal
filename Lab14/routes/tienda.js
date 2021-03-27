const express = require('express');
const router = express.Router();

const path = require('path');

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

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
        num: '0'
    },
    {
        nombreMayus: 'SANDIA',
        nombre: 'Sandia',
        descripcion:    'La sandía es una planta anual y la mayoría de las variedades se pueden cosechar 80-100 días después de la siembra. <br><br> Se cree que los egeipcios fueron los primero en cultivarla a gran escala.<br><br>$35.00/k',
        imagen: './IMG/sandia.jpg',
        num: '1'
    },
    {
        nombreMayus: 'JICAMA',
        nombre: 'Jicama',
        descripcion:    'Es una legumbre, tambien llamada tubérculo.<br><br> Las vainas son tóxicas, pero la raiz es 100% comestible.<br><br> Hay registros de su consumo de las culturas tolteca, mexica, maya y zapoteca.<br><br> $23.00/k',
        imagen: './IMG/jicama.png',
        num: '2'
    },
    {
        nombreMayus: 'JITOMATE',
        nombre: 'Jitomate',
        descripcion:    'Las naranjas brindan un aporte importante de vitamina C. <br><br> Promueve niveles saludables de azúcar en sangre.<br><br> $12.00/k',
        imagen: './IMG/jitomate.jpg',
        num: '3'
    },
    {
        nombreMayus: 'CHICHARO',
        nombre: 'Chicharo',
        descripcion:    'Las naranjas brindan un aporte importante de vitamina C. <br><br> Promueve niveles saludables de azúcar en sangre.<br><br> $12.00/k',
        imagen: './IMG/chicharo.jpg',
        num: '4'
    },
    {
        nombreMayus: 'ESPINACA',
        nombre: 'Espinaca',
        descripcion:    'Las naranjas brindan un aporte importante de vitamina C. <br><br> Promueve niveles saludables de azúcar en sangre.<br><br> $12.00/k',
        imagen: './IMG/espinaca.jpg',
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
    });
    console.log("Total tienda");
    //response.send("Descuento: " + descuento +"%");
    //request.body.descuento = "Descuento: " + descuento +"%";
    //request.body.iva = "IVA: " + iva +"%";
    //request.body.subtotal = "Subtotal: " + subtot +"%";
    //request.body.total = "Total: " + total +"%";
    console.log("Descuento: " + descuento + " | IVA: " + iva +" | Total: $" + total);
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
    total=0;
    console.log(request.body.art1);
    let costo1 = 12 * request.body.art1;
    let costo2 = 35 * request.body.art2;
    let costo3 = 23 * request.body.art3;
    let costo4 = 18 * request.body.art4;
    let costo5 =  9 * request.body.art5;
    let costo6 = 15 * request.body.art6;
    subtot = costo1 + costo2 + costo3 + costo4 + costo5 + costo6;
    total = subtot*(100-descuento)/100;
    total += (total * iva)/100;
    
    //console.log("Costo 1 : " + costo1 + " | Costo 2 : " + costo2);
    //console.log("Subtotal: " + subtot + " | Total: $" + total);
    response.setHeader('Location', "/tienda/Total");
    response.status(302);
    response.end();
});

module.exports = router;