import {ItemList} from '../ItemList'
import { useState ,useEffect} from 'react';
import { Loader } from '../Loader';
import { Filters } from '../Filters';
import img from '../../assets/img/portada_prods.jpg'
import { useParams } from 'react-router-dom'
import { db } from '../Firebase';
import { collection,getDoc,getDocs, query, where } from 'firebase/firestore'


const IndumentariaContainer = () => {
    const [listProduct, setListProduct] = useState([])
    const [loading,setLoading] = useState(true)
    const {category} = useParams()

    useEffect(() => {
        const productosCollection = collection(db,'indumentaria')
        if(category){
            const filtro = query(productosCollection,where('categoria','==',category))
            const consulta = getDocs(filtro)
            consulta
            .then(snapshot=>{
                setLoading(false)
                const productos=snapshot.docs.map(doc=>{
                    return {
                        ...doc.data(),
                        cod:doc.id
                    }
                })
                setListProduct(productos)
                console.log(productos)
            })
            .catch(err=>{
                console.log(err)
            })
        }else{
            const consulta = getDocs(productosCollection)
            consulta
            .then(snapshot=>{
                setLoading(false)
                const productos=snapshot.docs.map(doc=>{
                    return {
                        ...doc.data(),
                        cod:doc.id
                    }
                })
                setListProduct(productos)
                console.log(productos)
            })
            .catch(err=>{
            console.log(err)
            })
        }
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

export {IndumentariaContainer} ;