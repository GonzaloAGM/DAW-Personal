const db = require('../util/database');

module.exports = class Articulo {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre,descripcion,dirImagen,precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.dirImagen = dirImagen;
        this.precio = precio;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO articulos (nombre,descripcion,dirImagen,precio) VALUES (?,?,?,?)',
            [this.nombre, this.descripcion, this.dirImagen,this.precio]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        //db.execute('SELECT * FROM articulos');
        return db.execute('SELECT * FROM articulos');
        /*    .then(([rows, fieldData]) => {
                console.log(rows);
            })
            .catch(err => {
                console.log(err);
            });
        return articulos;*/
    }

    static fetchOne(nombre) {
        return db.execute('SELECT * FROM articulos WHERE nombre = ?', [nombre]);
    }
}