export class Carrito {
    constructor(id,productos,total,user,dataFacturacion){
        this.id = id
        this.productos=productos
        this.total=total
        this.user=user
        this.dataFacturacion=dataFacturacion
    }
    BorrarCarrito(){
        this.productos = []
    }
    GenerarOrden(Cart,User,DataFac){
        const orden = {
            carrito : Cart,
            Usuario : User,
            DataFactura : DataFac,
            EstimadoEntrega : "7 a 10"
        }
    }
}
export class ItemCart{
    constructor(idProd,NameProd,Quantity){
        this.idProd=idProd,
        this.NameProd=NameProd
        this.Quantity=Quantity
    }
    ActCant(newCant,Stock){
        if(newCant>Stock){
            this.Quantity=newCant
        }
    }
}