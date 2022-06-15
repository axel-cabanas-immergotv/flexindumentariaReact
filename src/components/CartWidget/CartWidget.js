import React from "react";
import { CartContext } from '../../context/CartContext/CartContext';

export default function CartWidget ({display}) {
    const { cart } = React.useContext(CartContext);
    const totalCart = () => {
        let total = 0;
        cart.map(product => total = total + product.quantity);
        return total;
      }

    return (
        <div className="cart" style={{display: display}}>
            <img src='https://firebasestorage.googleapis.com/v0/b/flexindumentaria-71aa7.appspot.com/o/assets%2Fcart.png?alt=media&token=63867cd1-8af5-473f-a805-7435b0adfe7d' alt='carrito de compras' />
            <p>({totalCart()})</p>
        </div>
    )
}