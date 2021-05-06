const db = require('../util/database');

module.exports = class Lugar {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(idLugar, nombre, descripcion) {
        this.idLugar = idLugar;
        this.nombre = nombre;
        this.descripcion = descripcion;
        //this.fecha = new Date().toLocaleString('ES');
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM lugares');
    }

}