import { useState } from "react";

const ItemCount = ( {initial , stock , onAdd} ) =>{
    const [count,setCount]=useState(initial);

    const increment = () => count < stock && setCount(count+1);
    const decrement = () => count > initial && setCount(count-1);


    return (
        <div className="CardProd">
        <div className="ItemCount">
            <button onClick={decrement} className='buttonItemCount'>-</button>
            <p className="Count">{count}</p>
            <button onClick={increment} className='buttonItemCount'>+</button>
        </div>
        <div>
            <p className="textStock">stock disponible: {stock}</p>
        </div>
        <div>
            <button className="buttonAddToCart">AGREGAR AL CARRITO</button>
        </div>
        </div>
    )
}

export { ItemCount }