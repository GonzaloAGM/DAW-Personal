const Incidente = require('./../models/Incidente');

exports.getHome = (request, response, next) => {

    Incidente.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('registrar_incidente', {
                state: true,
                Incidentes: rows, 
                titulo: "Incidentes"
            });
        })
        .catch(err => console.log(err));
    
}

exports.useNotFound =  (request, response, next) => {

    Incidente.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('registrar_incidentes', { 
                Incidentes: rows, 
                titulo: "Incidentes"
            });
        })
        .catch(err => console.log(err));
    
}