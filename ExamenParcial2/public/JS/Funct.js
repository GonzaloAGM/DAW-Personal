document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
  });

  M.AutoInit();

function registrarIncidente(){
    const csrf = document.getElementById('_csrf').value;
    
    const lugar = document.getElementById("idLugarIn").value;
    const tipo = document.getElementById("idTIncidenteIn").value;
    const desc = document.getElementById("descIncidente").value;

    let data = {
        idLugar : lugar,
        idTipoIncidente : tipo,
        descripcion : desc
    };

    //console.table(data);
    
    fetch('/registrar',{
        method: 'POST',
        headers: {'Content-Type':'application/json','csrf-token': csrf},
        body:JSON.stringify(data)
    }).then((result) => {
        return result.json();
    }).then((data) => {
        console.log('Nuevo Registro');
        let html = '';
        for (let Incidente of data.Incidentes) { 
            html += '<div class="col l3 m4 s12">' +
                        '<div class="card blue-grey darken-1 hoverable">' +
                            '<div class="card-content white-text">' +
                            '<span class="card-title">' + Incidente.nombreTipo + ' en ' + Incidente.lugarNombre + '</span>' +
                            '<hr><p>' + Incidente.tiempo + '</p><br><p>' + Incidente.descripcion + '</p>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
        }
        document.getElementById('lista_incidentes').innerHTML = html;
        M.toast({html: 'El incidente fue registrado'})
    }).catch(err => {
        console.log(err);
    });
}

const buscar = () => {
        
    let criterio = document.getElementById("buscar").value;
    if(criterio === ''){
        criterio = " ";
    }
    console.log(criterio);

    fetch('/buscar/'+criterio, {
        method: 'GET',
        headers: {
            //'Content-Type': 'application/json',
        }
    }).then(result => {
        return result.json(); 
    }).then(data => {
        console.log("Respuesta de busqueda");
        let html = '';
        for (let Incidente of data.Incidentes) { 
            html += '<div class="col l3 m4 s12">' +
                        '<div class="card blue-grey darken-1 hoverable">' +
                            '<div class="card-content white-text">' +
                            '<span class="card-title">' + Incidente.nombreTipo + ' en ' + Incidente.lugarNombre + '</span>' +
                            '<hr><p>' + Incidente.tiempo + '</p><br><p>' + Incidente.descripcion + '</p>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
        }
        document.getElementById('lista_incidentes').innerHTML = html;
    }).catch(err => {
        console.log(err);
    });
}