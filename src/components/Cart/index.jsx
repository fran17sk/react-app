import { NavLink } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"
import { FormCart } from "../FormCart"

const bikeImages = require.context('../../assets/img/bicicletas',true)

const Cart = () => {

    const {cartList,totalPrice,removeProduct,cleanCartList} = useCartContext()

    return (
        <>
        <section className="ventana_pagar">
            <div>
                <div id="productos_carrito" className="contenedor_prods">
                    <h2 className="titulo_carrito">Mi Carrito</h2>
                </div>
                <div className="productos_carrito_preCompra" id="productos_carrito_preCompra">
                    <div className="item_carritoPreCompra fondo">
                        <h6 className="nameProdItemCompra">PRODUCTO</h6>
                        <h6 className="">PRECIO U.</h6>
                        <h6 className=''>CANT</h6>
                        <h6 className="">SUBTOTAL</h6>
                        <h6>IMAGEN</h6>
                        <h6>BORRAR</h6>
                    </div>
                    {cartList.map(prod =>
                        <>
                            <div id={prod.cod} key={prod.cod} className="item_carritoPreCompra">
                                <h6 className="nameProdItemCompra">{prod.nombre}</h6>
                                <h5 className="cart-price">${prod.precio}</h5>
                                <h5 className='product-quantity'>{prod.quantity}</h5>
                                <h5 className="cart-price">${prod.precio*prod.quantity}</h5>
                                <img src={bikeImages(`./${prod.cod}.jpg`)} alt="" className="img_item"></img>
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>removeProduct(prod.cod)} width="16" height="16" fill="currentColor" className="bi bi-trash itemRemove remove-btn" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </div>
                        </>
                    )}
                </div>
                {cartList.length===0
                ?
                <h2 className='titleCartVacio'>Tu Carrito esta Vacio</h2>
                :
                <>
                    <div className="totales">
                        <button className='purchase-btn' onClick={()=>cleanCartList()}>VACIAR CARRITO</button>
                        <div className="TotalFlex">
                            <span className="total-cart">TOTAL:</span>
                            <span className="total-cart">${totalPrice()}</span>
                        </div>
                        <div className="DatosFullFlex">
                            <FormCart/>
                        </div>
                        <button className="purchase-btn">FINALIZAR COMPRA</button>
                    </div>
                </>
            }
                
            </div>
            
        </section>
        <div>
            <NavLink to='/bicicletas'><span className="seguirComprando">Seguir comprando</span></NavLink>
        </div>
        
        </>
    )
}

export {Cart}