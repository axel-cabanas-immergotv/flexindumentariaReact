import React from "react";
import { CartContext } from '../../context/CartContext/CartContext';
import RatingStar from "../RatingStar/RatingStar";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail ({product}) {
    const {addItem, isInCart, removeItem} = React.useContext(CartContext);
    const [count, setCount] = React.useState(1);

    return (
        <section className="bg-light p-70">
            <div className="container d-flex item__detail">
                <div className="col-md-8 item__detail-img">
                    <img className="img-fluid" src={`../../${product.img}`} />
                </div>
                <div className="col-md-4 p-3 line">
                    <div className="item__detail-info">
                        <p href="#" className="mb-3 item__detail-info-name">{product.nombre}</p>
                        <div className="item__detail-marca mb-3">
                            <p className="">{product.marca}</p>
                            <RatingStar/>
                        </div>
                       
                        <p className="item__detail-info-price mt-3">${product.precio}</p>
                    </div>
                    
                    <div className="item__detail-talles mt-4">
                        <p className="mt-2 mb-2 ">Talle:</p>
                        <button className="item__detail-talles-btn">S</button>
                        <button className="item__detail-talles-btn">M</button>
                        <button className="item__detail-talles-btn">L</button>
                        <button className="item__detail-talles-btn">XL</button>
                    </div>
                    <div className="item__detail-btn d-flex flex-column mt-4">
                        {
                            isInCart(product.id)
                            ? (
                                <>
                                <Link to='/cart' className="item__detail-btn-link">
                                    <button className="item__detail-btn-link-buy">
                                        Comprar ahora
                                    </button>
                                </Link>
                                <button onClick={() => removeItem(product.id)} className="item__detail-btn-link-buy mt-2">Eliminar del carrito</button>
                                </>
                            )
                            : (
                                <ItemCount
                                   onSubmit={() => addItem(product, count)}
                                   count={count}
                                   setCount={setCount}
                                   stock={product.stock}
                                   className="item__detail-count"
                                 />
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}