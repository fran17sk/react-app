import { products } from '../../utils/products';
import {ItemList} from '../ItemList'
import {customFetch} from '../../utils/customFetch'
import { useState ,useEffect} from 'react';
import { Loader } from '../Loader';
import { Filters } from '../Filters';
import img from '../../assets/img/portada_prods.jpg'
import { useParams } from 'react-router-dom'
import { db } from '../Firebase';
import { collection,getDoc,getDocs } from 'firebase/firestore'

const productosCollection = collection(db,'bicicletas')

const ItemListContainer = () => {
    const [listProduct, setListProduct] = useState([])
    const [loading,setLoading] = useState(true)
    const {category} = useParams()

    useEffect(() => {
        const productosCollection = collection(db,'bicicletas')
        const consulta = getDocs(productosCollection)

        consulta
        .then(snapshot=>{
            const productos=snapshot.docs.map(doc=>{
                return {
                    ...doc.data(),
                    cod:doc.id
                }
            })
            setLoading(true)
            if(category){
                setLoading(false)
                setListProduct(productos.filter(prod=>prod.categoria===category))
            }else{
                setLoading(false)
                setListProduct(productos)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    },[category])
    console.log(listProduct)

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