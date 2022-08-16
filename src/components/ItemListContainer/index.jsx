import { products } from '../../utils/products';
import {ItemList} from '../ItemList'
import {customFetch} from '../../utils/customFetch'
import { useState ,useEffect} from 'react';
import { Loader } from '../Loader';
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
        {!loading
        ?
        <ItemList listProduct={listProduct} />
        :
        <Loader/>
        }

    </>)
}

export {ItemListContainer} ;