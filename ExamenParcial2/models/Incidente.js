const db = require('../util/database');

module.exports = class Incidente {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(idLugar, idTipoIncidente, descripcion) {
        this.idLugar = idLugar;
        this.idTipoIncidente = idTipoIncidente;
        this.descripcion = descripcion;
        //this.fecha = new Date().toLocaleString('ES');
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        console.log(this);
        return db.execute('SELECT MAX(I.idIncidente) AS `num` FROM incidentes I')
        .then(([rows, fieldData]) => {
            let idincidente = rows[0].num;
            return db.execute('INSERT INTO `incidentes` (`idIncidente`, `idTipoIncidente`, `idLugar`, `descripcion`) VALUES (?, ?, ?, ?)',
                    [parseInt(idincidente) + 1,this.idTipoIncidente, this.idLugar, this.descripcion]
                );
        }).catch(err => {
            console.log(err);
        });
        
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        console.log("Recupera todos registros")
        return db.execute('SELECT I.idIncidente, L.nombre AS `lugarNombre`, T.nombre AS `nombreTipo`, I.descripcion, I.tiempo FROM incidentes I, lugares L, tipo_incidentes T WHERE I.idTipoIncidente = T.idTipoIncidente AND L.idLugar = I.idLugar ORDER BY I.tiempo DESC');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM incidentes WHERE idIncidente = ?', [id]);
    }

    static fetch(criterio) {
        console.log("busqueda de registros")
        return db.execute('SELECT I.idIncidente, L.nombre AS `lugarNombre`, T.nombre AS `nombreTipo`, I.descripcion, I.tiempo FROM incidentes I, lugares L, tipo_incidentes T WHERE I.idTipoIncidente = T.idTipoIncidente AND L.idLugar = I.idLugar AND ( I.descripcion LIKE ? OR L.descripcion LIKE ? OR T.descripcion LIKE ? OR L.nombre LIKE ? OR T.nombre LIKE ?) ORDER BY I.tiempo DESC', 
        ['%'+criterio+'%','%'+criterio+'%','%'+criterio+'%','%'+criterio+'%','%'+criterio+'%']);
    }

}