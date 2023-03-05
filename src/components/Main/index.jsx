import {Routes,Route} from 'react-router-dom'
import { ItemListContainer } from '../ItemListContainer'
import { ItemDetailConteiner } from '../ItemDetailConteiner'
import { ItemDetailIndConteiner } from '../ItemDetailIndContainer'
import { Cart } from '../Cart'
import { Home } from '../Home'
import { Contacto } from '../Contacto'
import { Proximamente } from '../Proximamente'
import { OrdenesContainer } from '../OrdenesContainer'
import { IndumentariaContainer } from '../Indumentaria'
import { SingUp } from '../SingUp'
import { SingIn } from '../SingIn'
const Main = () =>{
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/proximamente' element={<Proximamente/>}></Route>
            <Route path='/bicicletas' element={<ItemListContainer/>}></Route>
            <Route path='/indumentaria' element={<IndumentariaContainer/>}></Route>
            <Route path='/ordenes/user' element={<OrdenesContainer/>}></Route>
            <Route path='/bicicletas/category/:category' element={<ItemListContainer/>}></Route>
            <Route path='/product/:cod' element={<ItemDetailConteiner/>}></Route>
            <Route path='/productInd/:cod' element={<ItemDetailIndConteiner/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/sucursal/contactanos' element={<Contacto/>}></Route>
            <Route path='/MyAcount/login' element={<SingIn/>}></Route>
            <Route path='/MyAcount/register' element={<SingUp/>}></Route>
        </Routes>
    )
    
}

export default Main