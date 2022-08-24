import { createContext,useState,useContext } from "react"
import { products } from "../utils/products"
const CartContext = () => createContext([])
export const useCartContext = useContext(CartContext)

export function CartContextProvaider ({children}) {

    const [cartList,setCartList]=useState([])
    const isInCart = (id) => cartList.find(prod=>prod.cod===id)
    const addToCart = (item,quantity) => {
        if (isInCart(item.cod)){
            const newCart = cartList.map( prod => {
                if(item.id===prod.id){
                    const newQuantity = prod.quantity + quantity
                    return{...prod,quantity:newQuantity}
                }else{
                    return prod;
                }
                
            })
            setCartList(newCart)
        }else{
            const newProduct = {...prod,quantity:quantity}
            setCartList([...cartList,newProduct])
        }
    }

    const removeProduct = (id) => setCartList(cartList.filter(prod=>prod.cod!=id))

    const cleanCartList = () => setCartList([])

    const totalPrice = () => {
        return cartList.reduce((acc,product)=>acc+=(product.precio*product.quantity),0)
    }

    const totalProducts = () => {
        return cartList.reduce((acc,product)=>acc+=(product.quantity),0)
    }
    return (
        <CartContext.Provaider value = {(
            addToCart,
            removeProduct,
            cleanCartList,
            totalPrice,
            totalProducts

        )}>{children}</CartContext.Provaider>
    )
}