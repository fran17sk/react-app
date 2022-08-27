import imgCarousel1 from '../../assets/img/poster1.png'
import imgCarousel2 from '../../assets/img/poster2.jpg'
import imgCarousel3 from '../../assets/img/poster3.jpg'
import imgCarousel4 from '../../assets/img/poster4.jpg'
import imgCarousel5 from '../../assets/img/poster5.jpg'
import indumentaria from "../../assets/img/indumentaria.jpg"
import components from "../../assets/img/componentes.jpg"
import accesorios from "../../assets/img/accesorios.jpg"
import downhill from "../../assets/img/downhill.jpg"
import montain from '../../assets/img/mountain.jpg'
import ruta from "../../assets/img/ruta.jpg"
import wpp from '../../assets/img/wpp.png'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <div>
            <div id="carouselExampleIndicators" className="carousel slide carou" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imgCarousel1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={imgCarousel2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={imgCarousel3} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={imgCarousel4} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={imgCarousel5} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        <div className="Insta">
            <div className="titulo">
                <a href="" className="tituloConta"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg></a>
                <h1 className="tituloCont"><a href="">palitomaciasbikestore</a></h1>
            </div>
            <p>Estamos en instagram</p>
            <a href="https://www.instagram.com/fran17sk/"><button type="button" className="btn btn-outline-success">SEGUINOS</button></a>
        </div>
        <div className="seccionFlex">
            <div>
                <NavLink to='/proximamente'><span><img src={indumentaria} alt=""/></span></NavLink>
                <NavLink to='/proximamente'><span><h2>INDUMENTARIA</h2></span></NavLink>
            </div>
            <div>
            <NavLink to='/proximamente'><span><img src={components} alt=""/></span></NavLink>
            <NavLink to='/proximamente'><span><h2>COMPONENTES</h2></span></NavLink>
            </div>
            <div>
            <NavLink to='/proximamente'><span><img src={accesorios} alt=""/></span></NavLink>
            <NavLink to='/proximamente'><span><h2>ACCESORIOS</h2></span></NavLink>
            </div>
        </div>
        <div className="seccionFlex fondonav"><h2 className="subtitulo">BICIS DE COMPETENCIA</h2></div>
        <div className="seccionFlex">
            <div>
                <NavLink to='/bicicletas/category/Downhill'><img src={downhill} alt="" className="bicis"/></NavLink>
                <NavLink to='/bicicletas/category/Downhill'><span><h2>DOWNHILL</h2></span></NavLink>
            </div>
            <div>
                <NavLink to='/bicicletas/category/MontainBike'><span><img src={montain} alt="" className="bicis"/></span></NavLink>
                <NavLink to='/bicicletas/category/MontainBike'><span><h2>MOUNTAIN BIKE</h2></span></NavLink>
            </div>
            <div>
                <NavLink to='/bicicletas/category/Ruta'><span><img src={ruta} alt="" className="bicis"/></span></NavLink>
                <NavLink to='/bicicletas/category/Ruta'><span><h2>RUTERAS</h2></span></NavLink>
            </div>
        </div>
        <div className="seccionFlex fondonav"><h2 className="subtitulo">SUCURSALES</h2></div>
        <div className="seccionFlex">
            <div>
                <h3 className="sucursalesTitle">CASA CENTRAL</h3>
                
            </div>
            <div>
                <h3 className="sucursalesTitle">SALTA - SUR</h3>
                
            </div>
        </div>
        <div>
            <a href="https://api.whatsapp.com/send?phone=543874756154"><img src={wpp} alt="" className="rounded-circle wapp-fixed wapp"/></a>
        </div>
    </div>
        </>
    )
}

export {Home}