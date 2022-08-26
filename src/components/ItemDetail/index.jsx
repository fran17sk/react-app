import { useState } from 'react';
import { ItemCount } from '../ItemCount';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';

const ItemDetail = (listProduct) => {

    const [isAdded,setIsAdded] = useState(false)

    const {addToCart,cartList} = useCartContext()

    const onAdd = (quantity) => {
        addToCart(listProduct.listProduct,quantity)
        setIsAdded(true)
    }

    return (
        <>
            <div className="DetailFlex">
                <div className="imagenDetail">
                    <img src={listProduct.listProduct.imagen} alt={listProduct.listProduct.nombre} className='imagenProdDetail' />
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