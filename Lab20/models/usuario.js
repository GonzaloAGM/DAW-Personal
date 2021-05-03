const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(userName,userPssw) {
        this.userName = userName;
        this.userPssw = userPssw;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        //Dentro del método del modelo que crea el usuario
        //El segundo argumento es el número de veces que se aplica el algoritmo, actualmente 12 se considera un valor seguro
        //El código es asíncrono, por lo que hay que regresar la promesa
        console.log(this.userName + ' : ' + this.userPssw);
        return bcrypt.hash(this.userPssw, 12)
            .then( (password) => {
                console.log(this.userName + ' : ' + password);
                return db.execute('INSERT INTO usuarios (userName,userPssw) VALUES (?,?)',
                [this.userName, password]
            );
            }).catch(err => {
                console.log(err);
                throw Error("Nombre de usuario duplicado");
            });
    }

    toString(){
        return "nombreUsuario: '" + this.nombreUsuario + "', contrasena: '" + this.contrasena;
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM usuarios');
    }

    static fetchOne(userName){
        return db.execute(
            'SELECT * FROM usuarios WHERE userName = ?',
            [userName]
        );
    }

}