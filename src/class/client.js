export class Client extends Persona{
    constructor(nombre,apellido,email,celular,domicilio,nacionalidad,documento,ordenes,carrito,dataFacturacion,){
        super(nombre,apellido,email,celular,domicilio,nacionalidad,documento)
        this.ordenes = ordenes
        this.carrito = carrito
        this.dataFacturacion = dataFacturacion
    }
    
}

