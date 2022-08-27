import { Filters } from '../Filters';
import {Item} from '../Item'


const ItemList = ({listProduct})=>{

    return(
        <>
            
            <div id='productos' className='listadoFlex'>
                {listProduct.map(product=><Item key={product.cod} product={product}/>)}
            </div>
        </>
        
        )
    }
export {ItemList};