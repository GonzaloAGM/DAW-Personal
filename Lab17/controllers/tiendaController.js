const Articulo = require('../models/articulo');
const Total = require('../models/total');

const cuenta = new Total(0,0,0,0);

exports.useTotal = (request, response, next) => {
    let state = request.session.sesionLoginUser === undefined ? false : true;
    if(state){
        let cantidad = 0;
        let mensaje = '';
        if (req.cookies.totalCompras === undefined){
            response.setHeader('Set-Cookie', 'totalCompras='+ cuenta.getTotal() +'; HttpOnly');
        }else{
            cantidad = (request.cookies.totalCompras + cuenta.getTotal());
            response.cookie('totalCompras', cantidad);
        }
        if(request.cookies.totalCompras > 500){
            response.cookie('totalCompras', 0);
            mensaje = 'En tu proxima compra, tendrás un cupon del 10%';
        }
        
        response.render('TotalTienda', {
            titulo: "Lab17-Tienda-GAGM-DAW & BD",
            logged : state,
            act1: "",
            act2: "",
            act3: "active",
            act4: "",
            Descuento: cuenta.getDescuento(),
            IVA: cuenta.getIva(),
            Subtotal: cuenta.getSubtot(),
            Total: cuenta.getTotal(),
            mensaje: mensaje,
            nombreUser: request.session.sesionLoginUser
        });
        console.log("Total tienda");
        //console.log("Descuento: " + descuento + " | IVA: " + iva +" | Total: $" + total);
        response.status(201);
    }else{
        console.log("Intento no aut total tienda");
        response.redirect('/login/ValidaPssw');
        response.status(202);
    }
    
};

exports.getTienda = (request, response, next) => {
    let state = request.session.sesionLoginUser === undefined ? false : true;
    response.render('tienda', {
        titulo: "Lab17-Tienda-GAGM-DAW & BD",
        logged : state,
        act1: "",
        act2: "",
        act3: "active",
        act4: "",
        articulos: Articulo.fetchAll(),
        nombreUser: request.session.sesionLoginUser
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