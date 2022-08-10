import { useState, useEffect } from "react";
import { products } from "../../utils/products";
import { customFetch } from "../../utils/customFetch";
import { ItemDetail } from "../ItemDetail";
import { Loader } from "../Loader";
const ItemDetailConteiner = () => {

    const [listProduct,setListProduct]=useState({})
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProduct(res.find(item=>item.cod===1001))
            })
    },[])
    console.log(listProduct)


    return (
        <>
            {!loading?<ItemDetail listProduct={listProduct}/>:<Loader/>}
        </>

                    
    )
}

export {ItemDetailConteiner};