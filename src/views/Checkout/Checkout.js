import React from "react";
import Footer from "../../components/Footer/Footer";

export default function Checkout ({product}) {
    return (
        <div className="d-flex align-items-center checkout__items-card mb-3">
            <div className="cart__container-img">
                <img width='90px' height='auto' src={product.img} />
            </div>
            <div className="">
                <p>{product.title}</p>
                <p>Cantidad: <strong>{product.quantity}</strong></p>
                <p><strong>Precio:</strong> ${product.price}</p>
            </div>
        </div>
    )
}