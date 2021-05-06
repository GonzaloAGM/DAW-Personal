const Incidente = require('./../models/Incidente');
const Lugar = require('./../models/lugar');
const TipoIncidente = require('./../models/tipoincidente');

exports.getHome = (request, response, next) => {
    Lugar.fetchAll()
    .then(([rows_lugares, fieldData]) => {
        TipoIncidente.fetchAll()
        .then(([rows_tipos, fieldData]) => {
            Incidente.fetchAll()
            .then(([rows_Incidentes, fieldData]) => {
                response.render('registrar_incidente', {
                    state: true,
                    Lugares: rows_lugares,
                    Tipos: rows_tipos, 
                    Incidentes: rows_Incidentes,  
                    titulo: "Incidentes"
                });
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err)); 
    console.log("En pag de registros");   
}

exports.useNotFound =  (request, response, next) => {

    response.render('err404', { 
        state: true,
        titulo: "404:Pagina no encontrada"
    });
    console.log("En pag desconocida"); 
}