import {Image} from '@chakra-ui/react'

const Item = ({product}) =>{
    console.log(product)
    return (
        <>
            <div id={product.id} class="">
                <Image src={product.imagen} w='100px' alt={product.nombre}/>
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