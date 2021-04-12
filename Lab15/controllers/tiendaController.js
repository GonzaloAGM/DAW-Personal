const Articulo = require('../models/articulo');
const Total = require('../models/total');

const cuenta = new Total(0,0,0,0);

exports.useTotal = (request, response, next) => {
    response.render('TotalTienda', {
        titulo: "Lab15-Tienda-GAGM-DAW & BD",
        act1: "",
        act2: "",
        act3: "active",
        act4: "",
        Descuento: cuenta.getDescuento(),
        IVA: cuenta.getIva(),
        Subtotal: cuenta.getSubtot(),
        Total: cuenta.getTotal()
    });
    console.log("Total tienda");
    //console.log("Descuento: " + descuento + " | IVA: " + iva +" | Total: $" + total);
    response.status(201);
};

exports.getTienda = (request, response, next) => {
    response.render('tienda', {
        titulo: "Lab15-Tienda-GAGM-DAW & BD",
        act1: "",
        act2: "",
        act3: "active",
        act4: "",
        articulos: Articulo.fetchAll()
    });
    console.log("Tienda");
    response.status(200);
};

exports.postTienda = (request, response, next) => {
    cuenta.setDescuento(request.body.descuento);
    cuenta.setIva(request.body.iva);
    cuenta.setSubtot(request.body.subtinput);
    cuenta.calculaTotal();

    //console.log("Subtotal: " + subtot + " | Total: $" + total);
    response.redirect('/tienda/Total');
    response.status(302);
    response.end();
};