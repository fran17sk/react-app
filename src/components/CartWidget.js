import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

const CartWidget = () => {

    const {totalProducts} = useCartContext()
    return (<>
        <NavLink to='/cart'>
            <i id="cart" className="fas fa-shopping-cart color"></i>
            <span className ="cart-quantity">{totalProducts()}</span>
        </NavLink>
    </>);
}

export default CartWidget;