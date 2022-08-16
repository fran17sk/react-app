import {Item} from '../Item'


const ItemList = ({listProduct})=>{

    console.log(listProduct)
    return(
        <>
            
            <div className='grid' id='gridAreas'>
                <h1 id='titulo'>PRODUCTOS DISPONIBLES</h1>
                <div id='productos' className='listadoFlex'>
                    {listProduct.map(product=><Item key={product.cod} product={product}/>)}
                </div>
            </div>
        </>
        
        )
    }

export {ItemList};