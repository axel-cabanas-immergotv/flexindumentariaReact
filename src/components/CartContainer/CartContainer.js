import React from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import Cart from "../../views/Cart/Cart";

export default function CartContainer () {
    const { cart } = React.useContext(CartContext);
    const cartMap = cart.map(item => {return <Cart  product={item} key={item.id} />})

    return (
        <section className="bg-light pt-5 pb-5">
            <div className="container">
                {
                    cart.length === 0 ? 
                    (
                        <h1>No hay nada en el carrito</h1>
                    )
                    :
                    (
                        cartMap
                    )
                }
            </div>
        </section>
    )
}