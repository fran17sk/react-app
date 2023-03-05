export class DataFacturacion {
    constructor(titular,dni,num_target,vencimiento,cod){
        this.titular=titular
        this.dni=dni
        this.num_target=num_target
        this.vencimiento=vencimiento
        this.cod=cod
    }
    setTitular(titular){
        this.titular = titular
    }
    setdni(dni){
        this.dni = dni
    }
    setnum_target(num_target){
        this.num_target = num_target
    }
    setvencimiento(vencimiento){
        this.vencimiento = vencimiento
    }
    setcod(cod){
        this.cod = cod
    }
}
