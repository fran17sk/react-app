import {Item} from '../Item'

const ItemList = ({listProduct})=>{

    console.log(listProduct)
    return(
        <div id='listado'>
            {listProduct.map(product=><Item key={product.cod} product={product}/>)}
        </div>
        )
    }

export {ItemList};