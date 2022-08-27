import { NavLink } from "react-router-dom"

const Filters = () => {
    return (
        <>
            <h2>FILTROS</h2>
            <NavLink to='/bicicletas/category/MontainBike'><h3>MontainBike</h3></NavLink>
            <NavLink to='/bicicletas/category/Downhill'><h3>Downhill</h3></NavLink>
            <NavLink to='/bicicletas/category/Ruta'><h3>Ruteras</h3></NavLink>
            <NavLink to='/bicicletas'><h3>Mostrar Todas</h3></NavLink>
        </>
    )
}

export {Filters}