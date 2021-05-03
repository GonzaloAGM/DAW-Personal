module.exports = class Total {
    
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(descuento,iva,total,subtot) {
        this.descuento = descuento;
        this.iva = iva;
        this.total = total;
        this.subtot = subtot;
    }

    setDescuento(descuento){this.descuento = descuento; }
    getDescuento(){ return  this.descuento;             }

    setIva(iva){            this.iva = iva;             }
    getIva(){       return  this.iva;                   }

    setTotal(total){        this.total = total;         }
    getTotal(){     return  this.total;                 }

    setSubtot(subtot){      this.subtot = subtot;       }
    getSubtot(){    return  this. subtot;               }

    calculaTotal(){
        this.total = this.subtot*(100-this.descuento)/100;
        this.total += (this.total * this.iva)/100;
    }
    
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return articulos;
    }

}