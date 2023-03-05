import { NavLink } from "react-router-dom"
import { useState,useEffect } from "react"
import { db } from '../Firebase';
import { collection,getDoc,getDocs, query, where } from 'firebase/firestore'

export const SingIn = () => {
    const [user,setUser] = useState('')
    const [password,setPassword] = useState('')
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)
    const [estado,setStatus] = useState('')
    useEffect(() => {
        const productosCollection = collection(db,'users')
        const consulta = getDocs(productosCollection)
        consulta
        .then(snapshot=>{
            setLoading(false)
            const usersArray=snapshot.docs.map(doc=>{
                return {
                    ...doc.data(),
                    cod:doc.id
                }
            })
            setUsers(usersArray)
        })
        .catch(err=>{
        console.log(err)
        })
    },[])

    const hundleUser =(e)=>{
        const username = e.target.value
        console.log(username)
        setUser(username)
    }
    const hundlePass = (e) => {
        const pass = e.target.value
        setPassword(pass)
    }

    const iniciarsesion = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <section className="cuentaFlex">
                <div className="cuentaFlexItem">
                    <h2>Iniciá Sesión</h2>
                    <form action="" id="login" className="login">
                        <div className="login__grupo" id="grupo__user">
                            <label for="user" className="login__label">Usuario</label>
                            <div className="login__grupo-input">
                                <input type="text" className="login__input" onChange={hundleUser} name="user" id="user" placeholder="john123"/>
                                    <i className="login__validacion-estado fas fa-times-circle"></i>
                            </div>
                            <p className="login__input-error">El usuario no puede quedar vacio ni contener espacios o simbolos</p>
                        </div>
                        <div className="login__grupo" id="grupo__pass">
                            <label for="pass" className="login__label">Contraseña</label>
                            <div className="login__grupo-input paswordFlexx">
                                <input type="password" className="login__input" name="pass" onChange={hundlePass} id="pass"/>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="formpass bi bi-eye" onclick="myFunction0()" viewBox="0 0 16 16">
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                    </svg>
                            </div>
                        </div>
                        <div className="login__mensaje" id="login__mensaje-activo">
                            <p><i className="fas fa-exclamation-triangle"></i> <b>Error:</b> ERROR AL INICIAR SECION</p>
                        </div>

                        <div className="login__grupo login__grupo-btn-enviar">
                            <button type="submit" onclick={iniciarsesion} className="login__btn" id="loginboton">INICIAR SESION</button>
                            <p className="login__mensaje-exito" id="login__mensaje-exito">SESION INICIADA</p>
                            <NavLink to='/MyAcount/register'>¿Olvidaste tu contraseña?</NavLink>
                            <p>¿Aun no tienes cuenta?</p><NavLink to='/MyAcount/register'>Crear cuenta</NavLink>
                        </div>
                    </form>


                </div>
            </section>
        </>
    )
}