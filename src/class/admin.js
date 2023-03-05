class Admin extends Persona{
    licencia;
    region;
    claveCifrada;
    constructor(nombre,apellido,email,celular,domicilio,nacionalidad,documento,licencia,region,claveCifrada,){
        super(nombre,apellido,email,celular,domicilio,nacionalidad,documento)
        this.licencia=licencia
        this.region=region
        this.claveCifrada=claveCifrada
    }
    getLicencia(){
        return this.licencia
    }
    getRegion(){
        return this.region
    }
    getClave(){
        return this.claveCifrada
    }

    borrarProduct(){
        
    }
    addProduct(){

    }
}