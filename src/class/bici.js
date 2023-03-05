class Bici extends Producto{
    constructor(cod,nombre,marca,categoria,imagen,modelo,stock,precio,rodado,descarrilador,patadecambio,relacion,cuadro,suspencion){
        super(cod,nombre,marca,categoria,imagen,modelo,stock,precio)
        this.rodado=rodado
        this.descarrilador=descarrilador
        this.patadecambio=patadecambio
        this.relacion=relacion
        this.cuadro=cuadro
        this.suspencion=suspencion
    }
    getRodado(){
        return this.rodado
    }
    getDescarrilador(){
        return this.descarrilador
    }
    getPatadecambio(){
        return this.patadecambio
    }
    getRelacion(){
        return this.relacion
    }
    getCuadro(){
        return this.cuadro
    }
    getSuspencion(){
        return this.suspencion
    }
}
