import {Item} from '../Item'
import img from '../../assets/img/portada_prods.jpg'

const ItemList = ({listProduct})=>{

    console.log(listProduct)
    return(
        <>
            <img src={img}></img>
            <div className='grid' id='gridAreas'>
                <h1 id='titulo'>PRODUCTOS DISPONIBLES</h1>
                <div className='colum-filtros'>
                    <h2 id='filtros'>FILTROS</h2>
                </div>
                <div id='productos' className='listadoFlex'>
                    {listProduct.map(product=><Item key={product.cod} product={product}/>)}
                </div>
            </div>
        </>
        
        )
    }

export {ItemList};