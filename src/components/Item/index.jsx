import {Box,Image} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const bikeImages = require.context('../../assets/img/bicicletas',true)

const Item = ({product}) =>{
    return (
        <>
            <div className='card-prod'>
                <div id={product.cod} className="producto card">
                <Box boxSize='sm'>
                    <Image src={bikeImages(`./${product.cod}.jpg`)} alt={product.nombre} className='img-prod' />
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