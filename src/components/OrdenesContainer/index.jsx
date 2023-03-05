import { useEffect, useState } from "react"
import { db } from "../Firebase"
import { collection,getDoc,getDocs, query, where } from 'firebase/firestore'
import { OrdensList } from "../OrdensList"
import { Loader } from "../Loader"

const OrdenesContainer = () => {
    const [ordensList,setOrdensList] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        const productosCollection = collection(db,'ordenes')
        const consulta = getDocs(productosCollection)
                consulta
                .then(snapshot=>{
                    const ordenes = snapshot.docs.map(doc=>{
                        return {
                            ...doc.data(),
                            cod:doc.id
                        }
                    })
                    setLoading(false)
                    setOrdensList(ordenes)
                    console.log(ordenes)
                })
                .catch(err=>{
                    console.log(err)
                })
    },[])
    
        
    return (
        <>
            {loading ? <Loader></Loader> : <><h1>ORDENES DE COMPRA GENERADAS</h1>
            <OrdensList ordenesList={ordensList}/></>}
            
        </>
    )
}
export {OrdenesContainer}