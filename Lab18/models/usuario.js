const db = require('../util/database');

module.exports = class Usuario {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(userName,userPssw) {
        this.userName = userName;
        this.userPssw = userPssw;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO usuarios (userName,userPssw) VALUES (?,?)',
            [this.userName, this.userPssw]
        );
    }

    check(){
        return db.execute('SELECT idUsuario, userName FROM `usuarios` WHERE userName= ? AND userPssw = ?',
            [this.userName, this.userPssw]
        );
    }

    toString(){
        return "nombreUsuario: '" + this.nombreUsuario + "', contrasena: '" + this.contrasena;
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM usuarios');
    }

}