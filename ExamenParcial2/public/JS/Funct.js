document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  M.AutoInit();

const registrarIncidente = () => {
    const csrf = document.getElementById('_csrf').value;
    
    const mensaje = document.getElementById('mensaje').value;

    let data = {
        mensaje : mensaje,
    };

    fetch('/',{
        method: 'POST',
        headers: {'Content-Type':'application/json','csrf-token': csrf},
        body:JSON.stringify(data)
    }).then(result => {
        console.log('Nuevo Registro');
        return result.json();
    });
    
};

const buscar = () => {
        
    let criterio = document.getElementById("buscar").value;

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
        console.log(data);
        let html = '';
        for (let Incidente of data.Incidentes) { 
            html += '<div class="col l3 m4 s12">' +
                        '<div class="card blue-grey darken-1">' +
                            '<div class="card-content white-text">' +
                                '<span class="card-title">' + incidente.lugarNombre + '-' + incidente.nombreTipo + '</span>'+
                                '<p>' + incidente.tiempo + '</p>' +
                                '<p>' + incidente.descripcion + '</p>' +
                                '<span class="card-title">' + 
                            '</div>' +
                        '</div>' +
                    '</div>';
        }
        document.getElementById('lista_mascotas').innerHTML = html;
    }).catch(err => {
        console.log(err);
    });
}