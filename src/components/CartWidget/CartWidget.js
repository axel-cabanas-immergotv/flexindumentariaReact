import React from "react";
import { CartContext } from '../../context/CartContext/CartContext';

export default function CartWidget ({img, display}) {
    const { cart } = React.useContext(CartContext);
    return (
            <div className="cart" style={{display: display}}>
                <img src={img} alt='carrito de compras' />
                <p>({cart.length})</p>
            </div>
    )
}