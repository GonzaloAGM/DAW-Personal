const fs = require('fs');

const usuarios = [
    {nombreUsuario: 'Admin', contrasena: '1234'}, 
    {nombreUsuario: 'User', contrasena: 'noLeasEsto'}];

module.exports = class Usuario {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombreUsuario,contrasena) {
        this.nombreUsuario = nombreUsuario;
        this.contrasena = contrasena;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        usuarios.push(this);
        userText = this.toString() + "\n";
        fs.writeFileSync('login.txt', userText, {encoding: "utf8", flag: "a+"});
    }

    check(){
        const data = fs.readFileSync('login.txt');
        return data.includes(this.toString());
    }

    toString(){
        return "nombreUsuario: '" + this.nombreUsuario + "', contrasena: '" + this.contrasena;
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return usuarios;
    }

}