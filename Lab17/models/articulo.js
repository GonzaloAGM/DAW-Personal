const articulos = [
    {
        nombreMayus: 'NARANJA',
        nombre: 'Naranja',
        descripcion:    'Las naranjas brindan un aporte importante de vitamina C. <br><br>Promueve niveles saludables de azúcar en sangre.<br><br>$12.00/k',
        imagen: './IMG/naranja.png',
        precio: 12,
        num: '0'
    },
    {
        nombreMayus: 'SANDIA',
        nombre: 'Sandia',
        descripcion:    'La sandía es una planta anual y la mayoría de las variedades se pueden cosechar 80-100 días después de la siembra. <br><br> Se cree que los egeipcios fueron los primero en cultivarla a gran escala.<br><br>$35.00/k',
        imagen: './IMG/sandia.jpg',
        precio: 35,
        num: '1'
    },
    {
        nombreMayus: 'JICAMA',
        nombre: 'Jicama',
        descripcion:    'Es una legumbre, tambien llamada tubérculo.<br><br> Las vainas son tóxicas, pero la raiz es 100% comestible.<br><br> Hay registros de su consumo de las culturas tolteca, mexica, maya y zapoteca.<br><br> $23.00/k',
        imagen: './IMG/jicama.png',
        precio: 23,
        num: '2'
    },
    {
        nombreMayus: 'JITOMATE',
        nombre: 'Jitomate',
        descripcion:    'Las naranjas brindan un aporte importante de vitamina C. <br><br> Promueve niveles saludables de azúcar en sangre.<br><br> $12.00/k',
        imagen: './IMG/jitomate.jpg',
        precio: 18,
        num: '3'
    },
    {
        nombreMayus: 'CHICHARO',
        nombre: 'Chicharo',
        descripcion:    'Las naranjas brindan un aporte importante de vitamina C. <br><br> Promueve niveles saludables de azúcar en sangre.<br><br> $12.00/k',
        imagen: './IMG/chicharo.jpg',
        precio: 9,
        num: '4'
    },
    {
        nombreMayus: 'ESPINACA',
        nombre: 'Espinaca',
        descripcion:    'Las naranjas brindan un aporte importante de vitamina C. <br><br> Promueve niveles saludables de azúcar en sangre.<br><br> $12.00/k',
        imagen: './IMG/espinaca.jpg',
        precio: 15,
        num: '5'
    },
];

module.exports = class Articulo {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombreMayus,nombre,descripcion,imagen,precio,num) {
        this.nombreMayus = nombreMayus;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.precio = precio;
        this.num = num;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        articulos.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return articulos;
    }

}