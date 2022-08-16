import {Box,Image} from '@chakra-ui/react'
import {ItemCount} from '../ItemCount'
import { NavLink } from 'react-router-dom'

const Item = ({product}) =>{
    return (
        <>
            <div className='card-prod'>
                <div id={product.id} className="producto card">
                <Box boxSize='sm'>
                    <Image src={product.imagen} alt={product.nombre} className='img-prod' />
                </Box>
                    <NavLink to={`/product/${product.cod}`}>
                        <h5 className="viewDetails">VER DETALLES</h5>
                    </NavLink>
                    <div className="">
                        <h1 className="nameProd">{product.nombre}</h1>
                    </div>
                </div>
            </div>
            
        </>

    )
}

export {Item}