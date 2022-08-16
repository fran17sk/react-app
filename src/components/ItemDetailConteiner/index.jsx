import { useState, useEffect } from "react";
import { products } from "../../utils/products";
import { customFetch } from "../../utils/customFetch";
import { ItemDetail } from "../ItemDetail";
import { Loader } from "../Loader";
import { useParams } from "react-router-dom";


const ItemDetailConteiner = () => {

    const [listProduct,setListProduct]=useState({})
    const [loading,setLoading]=useState(true)
    const { cod }=useParams()
    

    useEffect(()=>{
        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProduct(res.find(item=>item.cod===parseInt(cod)))
            })
    },[])


    return (
        <>
            {!loading?<ItemDetail listProduct={listProduct}/>:<Loader/>}
        </>

                    
    )
}

export {ItemDetailConteiner};