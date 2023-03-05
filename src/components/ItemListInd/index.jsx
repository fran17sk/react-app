import { Filters } from '../Filters';
import {ItemInd} from '../ItemInd'


const ItemListInd = ({listProduct})=>{

    return(
        <>
            
            <div id='productos' className='listadoFlex'>
                {listProduct.map(product=><ItemInd key={product.cod} product={product}/>)}
            </div>
        </>
        
        )
    }
export {ItemListInd};