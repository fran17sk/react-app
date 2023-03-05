import {Box,Image} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const bikeImages = require.context('../../assets/img/bicicletas',true)

const OrdenItem = ({orden}) => {
    let date = orden.date.toDate() // convierte a un objeto Date de JS
        // Hours part from the timestamp
        let dia = date.getDate()
        let mes = date.getMonth()
        let año = date.getFullYear()
        let hours = date.getHours()
        let minutes = date.getMinutes()<10 ? "0" + date.getMinutes() : date.getMinutes()
        
        let fecha = dia + '/' + mes +'/' + año + ' Hora: ' + hours + ":" + minutes
        let entrega = dia+7 + '/' + mes +'/' + año
    console.log(fecha)
    return (
        <div className="OrdenContainer">
            <div className='DataUser'>
                <h3 className='titleDataOrden'>Datos del Usuario</h3>
                <div className='DataUserDiv'><h3 className='titleDataUserDiv'>Usuario : </h3><h3>{orden.buyer.name}</h3></div>
                <div className='DataUserDiv'><h3 className='titleDataUserDiv'>Correro electronico : </h3><h3> {orden.buyer.email}</h3></div>
                <div className='DataUserDiv'><h3 className='titleDataUserDiv'>Celular : </h3><h3>{orden.buyer.phone}</h3></div>
                <div className='DataUserDiv'><h3 className='titleDataUserDiv'>Fecha : </h3><h3>{fecha}</h3></div>
                <div className='DataUserDiv'><h3 className='titleDataUserDiv'>Fecha de entrega estimada : </h3><h3>{entrega}</h3></div>
            </div>
            <div className='ProdData'>
                <h3 className='titleDataOrden'>Productos</h3>
                <div className='title-prod-data'>
                    <h3 className='ImagDataProd'>Imagen</h3>
                    <h3 className='nameDataProd'>Nombre</h3>
                    <h3 className='cantDataProd'>Cant</h3>
                    <h3 className='subDataProd'>Subtotal</h3>
                </div>
                {orden.items.map(item=>{
                    return <div className='ProdDataRow'>
                                <Image src={bikeImages(`./${item.cod}.jpg`)} alt={item.nombre} className='img-prod-data' />
                                <h3 className='nameDataProd'>{item.nombre}</h3>
                                <h3 className='cantDataProd'>{item.quantity}</h3>
                                <h3 className='subDataProd'>${item.quantity*item.precio}</h3>
                            </div>
                })}
                <h3 className='totalfacturado'>Total Facturado: {orden.total} </h3>
            </div>
            <div className='ordenNum'>
                <h3>Codigo de Pedido</h3><h3 className='cod'>{orden.cod}</h3>
            </div>
        </div>
    )
}
export {OrdenItem}