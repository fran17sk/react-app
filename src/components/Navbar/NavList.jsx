import { NavLink } from "react-router-dom"
const NavList = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex opciones">
                            <li className="nav-item">
                                <NavLink to="/">
                                    <span className="nav-link active" aria-current="page">INICIO</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/bicicletas'>
                                    <span className="nav-link active" aria-current="page">BICICLETAS</span>
                                </NavLink>
                                
                            </li>
                            
                            <li className="nav-item">
                                <NavLink to='/proximamente'>
                                    <span className="nav-link active"  aria-current="page">COMPONENTES</span>
                                </NavLink>
                                
                            </li>
                            <li className="nav-item">
                                <NavLink to='/proximamente'>
                                    <span className="nav-link active"  aria-current="page">ACCESORIOS</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to='/indumentaria'><span className="nav-link active" aria-current="page">INDUMENTARIA</span></NavLink>
                                
                            </li>
                            <li className="nav-item">
                                <NavLink to='/proximamente'><span className="nav-link active" aria-current="page">MARCAS</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/proximamente'><span className="nav-link active" aria-current="page">PRODUCTO</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/sucursal/contactanos'><span className="nav-link active" aria-current="page">CONTACTO</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/MyAcount/login'><span className="nav-link active" aria-current="page">SING UP</span></NavLink>
                            </li>
                        </ul>
    )
}
export {NavList}