import { createContext,useState,useContext } from "react"

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export function CartContextProvider ({children}) {

    const [cartList,setCartList]=useState([])

    const isInCart = (cod) => cartList.find(prod => prod.cod === cod)

    const addToCart = (item,quantity) => {
        if (isInCart(item.cod)){
            const newCart = cartList.map( prod => {
                if(item.cod===prod.cod){
                    const newQuantity = prod.quantity + quantity
                    return{...prod,quantity:newQuantity}
                }else{
                    return prod;
                }
                
            })
            setCartList(newCart)
        }else{
            const newProduct = {...item,quantity:quantity}
            setCartList([...cartList,newProduct])
        }
    }

    const removeProduct = (cod) => setCartList(cartList.filter(prod=>prod.cod!=cod))

    const cleanCartList = () => setCartList([])

    const totalPrice = () => {
        return cartList.reduce((acc,product)=>acc+=(product.precio*product.quantity),0)
    }

    const totalProducts = () => {
        return cartList.reduce((acc,product)=>acc+=(product.quantity),0)
    }

    console.log(CartContext)
    return (
        <CartContext.Provider value = {{
            addToCart,
            removeProduct,
            cleanCartList,
            totalPrice,
            totalProducts,
            cartList
        }}>{children}</CartContext.Provider>
    )
}