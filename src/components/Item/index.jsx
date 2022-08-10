import {Box,Image} from '@chakra-ui/react'

const Item = ({product}) =>{
    console.log(product)
    return (
        <>
            <div id={product.id} class="">
            <Box boxSize='sm'>
                <Image src={product.imagen} alt={product.nombre} />
            </Box>
                <h5 class="">${product.precio}</h5>
                <div class="">
                    <h1 className="">{product.nombre}</h1>
                </div>
                <button class="">COMPRAR</button>
            </div>
        </>

    )
}

export {Item}