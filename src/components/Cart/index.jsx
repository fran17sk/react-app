import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"
import { ToastContainer, toast } from 'react-toastify';
import { db } from '../Firebase'
import { collection , addDoc , serverTimestamp} from "firebase/firestore"

const bikeImages = require.context('../../assets/img/bicicletas',true)

const Cart = () => {

    const {cartList,totalPrice,removeProduct,cleanCartList} = useCartContext()
    const ordenes = JSON.parse(localStorage.getItem('Ordenes'))||[]
    const numers = [0,1,2,3,4,5,6,7,8,9]
    const [surname,setsurname]=useState('')
    const [name,setname]=useState('')
    const [correo,setcorreo]=useState('')
    const [phone,setphone]=useState(0)
    const [titular,setTitular] = useState('')
    const [number,setnumber] = useState('')
    const [dni,setDni] = useState('')
    const [cvs,setCvs] = useState('')
    const keySurName = (e) => {
        if(e.key in numers){
            e.preventDefault()
        }
    }
    const clearForm = () => {
        document.getElementById('formulario').reset()
    }
    const hundleChangeSurname = (e) => {
        e.preventDefault()
        const input = e.target.value
        setsurname(input)
    }
    const hundleChangeName = (e) => {
        e.preventDefault()
        const input = e.target.value
        setname(input)
    }
    const hundleChangeCorreo = (e) => {
        e.preventDefault()
        const input = e.target.value
        setcorreo(input)
    }
    const hundleChangePhone = (e) => {
        e.preventDefault()
        const input = e.target.value
        setphone(input)
    }
    const hundleChangeNumber = (e) => {
        e.preventDefault()
        const input = e.target.value
        setnumber(input)
    }
    const hundleChangeDni = (e) => {
        e.preventDefault()
        const input = e.target.value
        setDni(input)
    }
    const hundleChangeTitular = (e) => {
        e.preventDefault()
        const input = e.target.value
        setTitular(input)
    }
    const hundleChangeCvs = (e) => {
        e.preventDefault()
        const input = e.target.value
        setCvs(input)
    }


    const validarform = () => {
        if(name!='' && surname !='' && correo!='' && phone>=999999){
            return true
        }else{
            return false
        }
    }
    const hundleClick = (e) => {
        e.preventDefault()
        const val = validarform()
        if(val){
            const orden = {
                buyer:{
                    name: surname +" "+ name ,
                    email:correo,
                    phone:phone
                },
                DataFac:{
                    titular : titular,
                    dni : dni,
                    num : number,
                    cvs : cvs
                },
                items:cartList,
                date:serverTimestamp(),
                total:totalPrice()
            }
            const ordersCollection = collection(db,'ordenes')
            const consulta = addDoc(ordersCollection,orden)
            consulta
            .then((res)=>{
                toast.success(`Orden ${res.id} generada con exito!!!`)
                clearForm()
                ordenes.push(res.id)
                localStorage.setItem('Ordenes',JSON.stringify(ordenes))
                cleanCartList()
            })
            .catch((err)=>{
                toast.error(`Error ${err} al generar Orden`)
            })
        }else{
            toast.error('Por favor rellena el formulario correctamente...')
        }
        
    }
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
                        <div className="DatosFullFlex" >
                            <form action="" className="formulario" id="formulario">
                                <div className="formulario__grupo" id="grupo__apellido">
                                    <label for="apellido" className="formulario__label">Apellido</label>
                                    <input onKeyDown={keySurName} onChange={hundleChangeSurname} type="text" className="formulario__input" name="apellido" id="apellido" placeholder="Ej: Cruz"/>
                                </div>
                                <div className="formulario__grupo" id="grupo__nombre">
                                    <label for="nombre" className="formulario__label">Nombre</label>
                                    <input onKeyDown={keySurName} onChange={hundleChangeName} type="text" className="formulario__input" name="nombre" id="nombre" placeholder="Ej: Franco"/>
                                </div>
                                <div className="formulario__grupo" id="grupo__correo">
                                    <label for="correo" className="formulario__label">Correo Electrónico</label>
                                    <input onChange={hundleChangeCorreo} type="email" className="formulario__input" name="correo" id="correo" placeholder="correo@correo.com"/>
                                </div>
                                <div className="formulario__grupo" id="grupo__telefono">
                                    <label for="telefono" className="formulario__label">Teléfono</label>
                                    <input onChange={hundleChangePhone} type="number" className="formulario__input" name="telefono" id="telefono" placeholder="4491234567"/>
                                </div>
                                <div className="formulario__mensaje" id="formulario__mensaje">
                                    <p><i className="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
                                </div>
                                <h3>DATOS DE FACTURACION</h3>
                                <div className="formulario__grupo" id="grupo__apellido">
                                    <label for="titular" className="formulario__label">Titular de la tarjeta</label>
                                    <input onKeyDown={keySurName} onChange={hundleChangeTitular} type="text" className="formulario__input" name="titular" id="titular" placeholder="Tal cual como aparece en la tarjeta"/>
                                </div>
                                <div className="formulario__grupo" id="grupo__nombre">
                                    <label for="numbtar" className="formulario__label">Numero de tarjeta</label>
                                    <input onChange={hundleChangeNumber} type="text" className="formulario__input" name="numbtar" id="numbtar" placeholder="VISA / MASTERCARD"/>
                                </div>
                                <div className="formulario__grupo" id="grupo__correo">
                                    <label for="correo" className="formulario__label">Documento De Identidad</label>
                                    <input onChange={hundleChangeDni} type="number" className="formulario__input" name="dni" id="dni" placeholder="DNI"/>
                                </div>
                                <div className="formulario__grupo" id="grupo__telefono">
                                    <label for="telefono" className="formulario__label">Codigo de Seguridad</label>
                                    <input onChange={hundleChangeCvs} type="password" className="formulario__input" name="cvs" id="cvs" placeholder="***"/>
                                </div>
                                <div className="formulario__mensaje" id="formulario__mensaje">
                                    <p><i className="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
                                </div>
                                <button onClick={hundleClick} className="purchase-btn">GENERAR ORDEN</button>
                            </form>
                        </div>
                        
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