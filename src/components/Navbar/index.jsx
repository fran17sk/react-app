import React from 'react';
import logo from '../../assets/img/icono.png'
import title from '../../assets/img/name.jpg'
import CartWidget from '../Widgets/CartWidget';
import { NavLink } from 'react-router-dom';
import { WppWidget } from '../Widgets/WppWidget';
import { InstaWidget } from '../Widgets/InstaWidget';
import { FaceWidget } from '../Widgets/FaceWidget';
import { OrdenWidget } from '../Widgets/OrdenWidget';
import { HelpWidget } from '../Widgets/HelpWidget';
import { NavList } from './NavList';
const Navbar = () =>{
    return (
        <div>
            <div className="BarraRedes redes menu-fixed-redes">
                <InstaWidget/>
                <WppWidget/>
                <FaceWidget/>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark fondonav menu menu-fixed menudos">
                <div className="container-fluid">
                    <div>
                        <NavLink to="/">
                            <span className="navbar-brand" ><img src={logo} alt="logo de la empresa" className="logo rounded-circle"></img></span>
                        </NavLink>
                        <NavLink to='/'>
                            <span className="navbar-brand title" ><img src={title} alt="" className="name"></img></span>
                        </NavLink>
                        
                    </div>
                    <form className="d-flex">
                        <input className="form-control me-2 busqueda" type="search" placeholder="¿Que estas buscando?" aria-label="Search"></input>
                        <button className="btn" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search colorLupa" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg></button>
                    </form>
                    <form className="d-flex iconos">
                        <a href="https://api.whatsapp.com/send?phone=543874756154"><HelpWidget/></a>
                        <a href="https://api.whatsapp.com/send?phone=543874756154" className='text-iconos'>Ayuda</a>
                    </form>
                    <form className="d-flex iconos">
                        <span><OrdenWidget/></span>
                        <a className='text-iconos'>Mis Ordenes</a>
                    </form>
                    <form className="d-flex iconos" id="carrito">
                        <span className="cart-btn">
                            <CartWidget/>
                        </span>
                        
                        <a className='text-iconos'>Mi Carrito</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                    </form>
                </div>
                <div className="barra"></div>
                <div className="fondoOpciones">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavList/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export {Navbar};
