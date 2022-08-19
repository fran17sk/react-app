import { NavLink } from "react-router-dom";

const CartWidget = () => {
    return (<>
        <NavLink to='/cart'>
            <i id="cart" class="fas fa-shopping-cart color"></i>
        </NavLink>
    </>);
}

export default CartWidget;