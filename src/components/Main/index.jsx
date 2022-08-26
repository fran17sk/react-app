import {Routes,Route} from 'react-router-dom'
import { ItemListContainer } from '../ItemListContainer'
import { ItemDetailConteiner } from '../ItemDetailConteiner'
import { Cart } from '../Cart'
const Main = () =>{
    return (
        <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/category/:category' element={<ItemListContainer/>}></Route>
            <Route path='/product/:cod' element={<ItemDetailConteiner/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
    )
    
}

export default Main