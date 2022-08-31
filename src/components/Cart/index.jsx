import { NavLink } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"

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
                            <form action="" class="formulario" id="formulario">
                                <div class="formul<<ario__grupo" id="grupo__apellido">
                                    <label for="usuario" class="formulario__label">Apellido</label>
                                    <div class="formulario__grupo-input">
                                        <input type="text" class="formulario__input" name="usuario" id="usuario" placeholder=""/>
                                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                    </div>
                                    <p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
                                </div>
                                <div class="formulario__grupo" id="grupo__nombre">
                                    <label for="nombre" class="formulario__label">Nombre</label>
                                    <div class="formulario__grupo-input">
                                        <input type="text" class="formulario__input" name="nombre" id="nombre" placeholder=""/>
                                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                    </div>
                                    <p class="formulario__input-error">El nombre no puede contener numeros ni simbolos</p>
                                </div>
                                <div class="formulario__grupo" id="grupo__correo">
                                    <label for="correo" class="formulario__label">Correo Electrónico</label>
                                    <div class="formulario__grupo-input">
                                        <input type="email" class="formulario__input" name="correo" id="correo" placeholder="correo@correo.com"/>
                                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                    </div>
                                    <p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
                                </div>
                                <div class="formulario__grupo" id="grupo__telefono">
                                    <label for="telefono" class="formulario__label">Teléfono</label>
                                    <div class="formulario__grupo-input">
                                        <input type="text" class="formulario__input" name="telefono" id="telefono" placeholder="4491234567"/>
                                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                    </div>
                                    <p class="formulario__input-error">El telefono solo puede contener numeros y el maximo son 14 dígitos.</p>
                                </div>
                                <div class="formulario__mensaje" id="formulario__mensaje">
                                    <p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
                                </div>
                            </form>
                        <div className="DatosFullFlex">
                            <form>
                                <div class="formulario__grupo" id="grupo__titular">
                                    <label for="usuario" class="formulario__label">Nombre completo del titular de la tarjeta</label>
                                    <div class="formulario__grupo-input">
                                        <input type="text" class="formulario__input" name="usuario" id="usuario" placeholder=""/>
                                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                    </div>
                                    <p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
                                </div>
                                <div class="formulario__grupo" id="grupo__numerotrg">
                                    <label for="nombre" class="formulario__label">Numero de tarjeta de debito/credito</label>
                                    <div class="formulario__grupo-input">
                                        <input type="text" class="formulario__input" name="nombre" id="nombre" placeholder=""/>
                                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                    </div>
                                    <p class="formulario__input-error">El nombre no puede contener numeros ni simbolos</p>
                                </div>
                                <div class="formulario__grupo" id="grupo__correo">
                                    <label for="correo" class="formulario__label">Correo Electrónico</label>
                                    <div class="formulario__grupo-input">
                                        <input type="email" class="formulario__input" name="correo" id="correo" placeholder="correo@correo.com"/>
                                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                    </div>
                                    <p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
                                            </div>
                                <div class="formulario__grupo" id="grupo__telefono">
                                    <label for="telefono" class="formulario__label">Teléfono</label>
                                    <div class="formulario__grupo-input">
                                        <input type="text" class="formulario__input" name="telefono" id="telefono" placeholder="4491234567"/>
                                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                    </div>
                                    <p class="formulario__input-error">El telefono solo puede contener numeros y el maximo son 14 dígitos.</p>
                                </div>
                                <div class="formulario__mensaje" id="formulario__mensaje">
                                    <p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
                                </div>
                            </form>
                        </div>
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