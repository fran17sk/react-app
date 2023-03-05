import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail";
import { Loader } from "../Loader";
import { useParams } from "react-router-dom";
import { db } from "../Firebase";
import { getDoc, collection, doc } from "firebase/firestore";



const ItemDetailIndConteiner = () => {

    const [listProduct,setListProduct]=useState({})
    const [loading,setLoading]=useState(true)
    const { cod }=useParams()
    

    useEffect(()=>{
        const productosCollection = collection(db,'indumentaria')
        const referencia = doc(productosCollection,cod)
        console.log(referencia)
        const consulta = getDoc(referencia)
        setLoading(true)
        consulta
        .then(res=>{
            const producto = {
                ...res.data(),
                cod:res.id
            }
            setListProduct(producto)
            setLoading(false)
        })
        .catch(err=>console.log(err))
    },[])


    return (
        <>
            {!loading?<ItemDetail listProduct={listProduct}/>:<Loader/>}
        </>

                    
    )
}

export {ItemDetailIndConteiner};