import {Routes,Route} from 'react-router-dom'
import { ItemListContainer } from '../ItemListContainer'
import { ItemDetailConteiner } from '../ItemDetailConteiner'
import { Cart } from '../Cart'
import { Home } from '../Home'
import { Proximamente } from '../Proximamente'
const Main = () =>{
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/proximamente' element={<Proximamente/>}></Route>
            <Route path='/bicicletas' element={<ItemListContainer/>}></Route>
            <Route path='/bicicletas/category/:category' element={<ItemListContainer/>}></Route>
            <Route path='/product/:cod' element={<ItemDetailConteiner/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
    )
    
}

export default Main