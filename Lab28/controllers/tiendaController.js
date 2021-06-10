const Articulo = require('../models/articulo');
const Total = require('../models/total');
const Airtable = require('airtable');
const secret = require('../util/secret');
//require('dotenv').config();
//Airtable.configure({ apiKey: secret.AIRTABLE_API_KEY });
const base = new Airtable({apiKey : secret.AIRTABLE_API_KEY }).base(secret.BASE);

const cuenta = new Total(0,0,0,0);

exports.useTotal = (request, response, next) => {
    let state = request.session.isLoggedIn === undefined ? false : true;
    let cantidad = 0;
    let mensaje = '';

    if (request.cookies.totalCompras === undefined){
        response.setHeader('Set-Cookie', 'totalCompras='+ cuenta.getTotal() +'; HttpOnly');
        response.render('TotalTienda', {
            titulo: "Lab20-Tienda-GAGM-DAW & BD",
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
        cuenta.setDescuento(0);
    }else{
        cantidad = (parseInt(request.cookies.totalCompras) + cuenta.getTotal());
        response.setHeader('Set-Cookie', 'totalCompras='+ cantidad +'; HttpOnly');
        if(request.cookies.totalCompras > 500){
            response.setHeader('Set-Cookie', 'totalCompras=0; HttpOnly');
            mensaje = 'En tu proxima compra, tendrás un cupon del 10%';
            response.render('TotalTienda', {
                titulo: "Lab20-Tienda-GAGM-DAW & BD",
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
            cuenta.setDescuento(10);
        }else
        {
            response.render('TotalTienda', {
                titulo: "Lab20-Tienda-GAGM-DAW & BD",
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
            cuenta.setDescuento(0);
        }
    }
    let total= cuenta.getTotal();
    base('Entradas').create([
        {
            fields:{
                Name : request.session.sesionLoginUser,
                Notes : total.toString()
            }
        }
    ], 
    (err, records) => {
        records.forEach(record => {
            console.log(record.fields);
            console.log(record);
        });
        console.log(err);
    });
    console.log("Total tienda");
    //console.log("Descuento: " + descuento + " | IVA: " + iva +" | Total: $" + total);
    response.status(201);
    
};

exports.getTienda = (request, response, next) => {
    let state = request.session.isLoggedIn === undefined ? false : true;
    Articulo.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('tienda', {
                titulo: "Lab17-Tienda-GAGM-DAW & BD",
                logged : state,
                act1: "",
                act2: "",
                act3: "active",
                act4: "",
                articulos: rows,
                Descuento : cuenta.getDescuento(),
                nombreUser: request.session.sesionLoginUser
            })
        })
        .catch(err => {
                console.log(err);
                response.redirect('/Err404');
            });    
    console.log("Tienda");
    response.status(200);
};

exports.postTienda = (request, response, next) => {
    //cuenta.setIva(request.body.iva);
    cuenta.setIva(16);
    cuenta.setSubtot(request.body.subtinput);
    cuenta.calculaTotal();

    //console.log("Subtotal: " + subtot + " | Total: $" + total);
    response.redirect('/tienda/Total');
    response.status(302);
    response.end();
};

exports.getArticulo = (request, response, next) => {
    let state = request.session.isLoggedIn === undefined ? false : true;
    const nombre_art = request.params.Articulos_nombre;
    Articulo.fetchOne(nombre_art)
        .then(([rows, fieldData]) => {
            response.render('tienda', {
                titulo: "Lab20-Tienda-GAGM-DAW & BD",
                logged : state,
                act1: "",
                act2: "",
                act3: "active",
                act4: "",
                articulos: rows,
                Descuento : cuenta.getDescuento(),
                nombreUser: request.session.sesionLoginUser
            })
        })
        .catch(err => {
                console.log(err);
                response.redirect('/Err404');
            });
    //Resto del código del controlador...
}