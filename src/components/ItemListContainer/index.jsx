import { products } from '../../utils/products';
import {ItemList} from '../ItemList'
import {customFetch} from '../../utils/customFetch'
import { useState ,useEffect} from 'react';
import { Loader } from '../Loader';
import { Filters } from '../Filters';
import img from '../../assets/img/portada_prods.jpg'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [listProduct, setListProduct] = useState([])
    const [loading,setLoading] = useState(true)
    const {category} = useParams()

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res=>{
                if(category){
                    setLoading(false)
                    setListProduct(res.filter(prod=>prod.categoria===category))
                }else{
                    setLoading(false)
                    setListProduct(res)
                }
                
            })
    },[category])

    return (
    <>
        <img src={img}></img>
        <div className='grid' id='gridAreas'>
            <h1 id='titulo'>PRODUCTOS DISPONIBLES</h1>
            <div id='filtros' className='custom-filters'><Filters/></div>
            {!loading
            ?
            <ItemList listProduct={listProduct} />
            :
            <Loader/>
            }
        </div>
    </>)
}

export {ItemListContainer} ;