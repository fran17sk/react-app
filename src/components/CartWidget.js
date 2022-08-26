import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

const CartWidget = () => {
    return (<>
        <NavLink to='/cart'>
            <i id="cart" class="fas fa-shopping-cart color"></i>
            <span className ="cart-quantity">0</span>
        </NavLink>
    </>);
}

export default CartWidget;