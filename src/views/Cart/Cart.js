import React from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import ItemCount from "../../components/ItemCount/ItemCount";

export default function Cart ({product}) {
    const { total, removeItem } = React.useContext(CartContext);
    const [count, setCount] = React.useState(product.quantity);

    return (
        <div className="cart__container">
                <div>
                    <div className="cart__container-info d-flex justify-content-center">
                        <div className="cart__container-img">
                            <img width='90px' height='auto' src={`../../${product.img}`} />
                        </div>
                        <div className="cart__container-item col-md-8 d-flex justify-content-around">
                            <a href="/">{product.nombre}</a>
                            <div className="cart__container-item-count">
                                <ItemCount
                                    count={count}
                                    setCount={setCount}
                                    stock={product.stock}
                                    className="item__detail-count"
                                />
                            </div>
                            <p className="cart__container-item-price">TOTAL: {total(product, count)}</p>
                            <button className="btn btn-danger" onClick={() => removeItem(product.id)} >X</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}