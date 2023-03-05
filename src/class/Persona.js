class Persona {
    constructor(nombre,apellido,email,celular,domicilio,nacionalidad,documento){
        this.nombre=nombre
        this.apellido=apellido
        this.email=email
        this.celular=celular
        this.domicilio=domicilio
        this.nacionalidad=nacionalidad
        this.documento=documento
    }
    getNombre(){
        return this.nombre
    }
    setNombre(nombre){
        if(nombre.length>0){
            nombre.trim()
            this.nombre=nombre
        }
    }
    getApellido(){
        return this.apellido
    }
    setApellido(apellido){
        if(apellido.length>0){
            apellido.trim()
            this.apellido=apellido
        }
    }
    getEmail(){
        return this.email
    }
    setEmail(email){
        if(email.length>0){
            email.trim()
            this.email=email
        }
    }
    getCell(){
        return this.celular
    }
    setCell(celular){
        if(celular.length>0){
            celular.trim()
            this.celular=celular
        }
    }
    getDomicilio(){
        return this.domicilio
    }
    setDomicilio(domicilio){
        if(domicilio.length>0){
            domicilio.trim()
            this.domicilio=domicilio
        }
    }
    getNacionalidad(){
        return this.Nacionalidad
    }
    setNacionalidad(nacionalidad){
        if(nacionalidad.length>0){
            nacionalidad.trim()
            this.nacionalidad=nacionalidad
        }
    }
}