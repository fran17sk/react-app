import {Box,Image} from '@chakra-ui/react'
import {ItemCount} from '../ItemCount'

const Item = ({product}) =>{
    console.log(product)
    return (
        <>
            <div className='card-prod'>
                <div id={product.id} class="producto card">
                <Box boxSize='sm'>
                    <Image src={product.imagen} alt={product.nombre} className='img-prod' />
                </Box>
                    <h5 class="">${product.precio}</h5>
                    <div class="">
                        <h1 className="nameProd">{product.nombre}</h1>
                        <ItemCount initial={product.initial} stock={product.stock}></ItemCount>
                    </div>
                </div>
            </div>
            
        </>

    )
}

export {Item}