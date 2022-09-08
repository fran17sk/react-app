import { useState } from 'react';
import { ItemCount } from '../ItemCount';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';


const bikeImages = require.context('../../assets/img/bicicletas',true)
const ItemDetail = (listProduct) => {

    const [isAdded,setIsAdded] = useState(false)

    const {addToCart,cartList,guardarCart} = useCartContext()

    const onAdd = (quantity) => {
        addToCart(listProduct.listProduct,quantity)
        setIsAdded(true)
    }

    return (
        <>
            <div className="DetailFlex">
                <div className="imagenDetail">
                    <img src={bikeImages(`./${listProduct.listProduct.cod}.jpg`)} alt={listProduct.listProduct.nombre} className='imagenProdDetail' />
                </div>
                <div className='infoDetail'>
                    <h1 className='nameProdDetail'>{listProduct.listProduct.nombre}</h1>
                    <div className='infoDetailFlex'>
                        <h3 className='textInfo'>Diciplina: </h3>
                        <h3 className='varInfo'>{listProduct.listProduct.categoria}</h3>
                    </div>
                    <div className='infoDetailFlex'>
                        <h3 className='textInfo'>Marca: </h3>
                        <h3 className='varInfo'>{listProduct.listProduct.marca}</h3>
                    </div>
                    <div className='infoDetailFlex'>
                        <h3 className='textInfo'>Material: </h3>
                        <h3 className='varInfo'>{listProduct.listProduct.material}</h3>
                    </div>
                    <div className='infoDetailFlex'>
                        <h3 className='textInfo'>Modelo: </h3>
                        <h3 className='varInfo'>{listProduct.listProduct.modelo}</h3>
                    </div>
                    <div className='infoDetailFlex'>
                        <h3 className='textInfo'>Precio: </h3>
                        <h3 className='varInfo'>$ {listProduct.listProduct.precio}</h3>
                    </div>
                    <div className='infoDetailFlex'>
                        
                        {
                            listProduct.listProduct.envio===0
                            ?
                            <h3 className='envio_free'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>   ENVIO GRATIS</h3>
                            :
                            <>
                                <h3 className='envio_free'>Costo de envio: </h3>
                                <h3 className='envio_free'>$ {listProduct.listProduct.envio}</h3>
                            </>
                            
                        }
                    </div>
                    <div className='infoDetailFlex'>
                    {   
                        isAdded ?
                            <NavLink to='/cart'><button className="buttonAddToCart">Ir al Carrito</button></NavLink>
                        :
                        <ItemCount initial={listProduct.listProduct.initial} stock={listProduct.listProduct.stock} onAdd={onAdd}/>
                    }
                    </div>
                        

                </div>
            </div>
            <div className='descripcionDetail'>
                    <p>La {listProduct.listProduct.nombre} es una bicicleta de cross country diseñada para resultar eficiente sobre superficies de montaña gracias a su horquilla de suspensión con bloqueo y a su sencilla transmisión 1x10 Shimano. Se ha diseñado para el mountain bike, pero también está equipada con soportes para portabultos y pata de cabra, por tanto, es una gran opción para las aventuras diarias por la ciudad.</p>
                </div>
        </>
    )
}

export {ItemDetail};