import { ItemCount } from '../ItemCount';
import { products } from '../../utils/products';
import {ItemList} from '../ItemList'
import {customFetch} from '../../utils/customFetch'
import { useState ,useEffect} from 'react';

const ItemListContainer = () => {
    const [listProduct, setListProduct] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res=>{
                setLoading(false)
                setListProduct(res)
            })
    },[])

    return (
    <>
        {!loading
        ?
        <ItemList listProduct={listProduct} />
        :
        <p className='title'>Cargando....</p>
        }

    </>)
}

export {ItemListContainer} ;