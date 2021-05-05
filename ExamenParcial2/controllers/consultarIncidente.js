const Incidente = require('./../models/Incidente');

exports.getBuscar =  (request, response, next) => {

    console.log("Petición asíncrona reciba");
    console.log(request.params.criterio);

    Incidente.fetch(request.params.criterio)
        .then(([rows, fieldData]) => {
            return response.status(200).json({Incidentes: rows});
        })
        .catch(err => {
            console.log(err)
        });
}

exports.regIncidente = (request, response, next) => {

    incidente.save()
    .then(() => {
        response.redirect('/');
    }).catch( err => {
        console.log(err);
        response.redirect('/');    
    });
    
}