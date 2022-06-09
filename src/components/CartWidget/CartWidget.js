import React from "react";
import { CartContext } from '../../context/CartContext/CartContext';

export default function CartWidget ({img, display}) {
    const { cart } = React.useContext(CartContext);
    const totalCart = () => {
        let total = 0;
        cart.map(product => total = total + product.quantity);
        return total;
      }

    return (
        <div className="cart" style={{display: display}}>
            <img src={img} alt='carrito de compras' />
            <p>({totalCart()})</p>
        </div>
    )
}