const db = require('../util/database');

module.exports = class Mascota {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, descripcion, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        //this.fecha = new Date().toLocaleString('ES');
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('SELECT MAX(I.idIncidente) FROM incidentes I')
        .then((idincidente) => {
            return db.execute('INSERT INTO `incidentes` (`idIncidente`, `idTipoIncidente`, `idLugar`, `tiempo`, `descripcion`) VALUES (, ?, ?, current_timestamp(), NULL)',
            [idincidente+1,this.idTipoIncidente, this.idLugar, this.descripcion]
        );
        }).catch(err => {
            console.log(err);
        });
        
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT I.idIncidente, L.nombre AS `lugarNombre`, T.nombre AS `nombreTipo`, I.descripcion, I.tiempo FROM incidentes I, lugares L, tipo_incidentes T WHERE I.idTipoIncidente = T.idTipoIncidente AND L.idLugar = I.idLugar ');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM incidentes WHERE idIncidente = ?', [id]);
    }

    static fetch(criterio) {
        return db.execute('SELECT I.idIncidente, I.idLugar AS `lugarNombre`, I.idTipoIncidente AS `nombreTipo`, I.descripcion, I.tiempo FROM incidentes I, lugares L, tipo_incidentes T WHERE I.idTipoIncidente = T.idTipoIncidente AND L.idLugar = I.idLugar AND ( I.descripcion LIKE ? OR L.descripcion LIKE ? OR T.descripcion LIKE ? OR L.nombre LIKE ? OR T.nombre LIKE ?)', 
        ['%'+criterio+'%','%'+criterio+'%','%'+criterio+'%','%'+criterio+'%','%'+criterio+'%']);
    }

}