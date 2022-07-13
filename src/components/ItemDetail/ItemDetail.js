import React from "react";
import { CartContext } from '../../context/CartContext/CartContext';
import { Link, useNavigate } from "react-router-dom";
import RatingStar from "../RatingStar/RatingStar";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail ({product, id}) {
    const {addItem, isInCart} = React.useContext(CartContext);
    const [count, setCount] = React.useState(1);
    const [size, setSize] = React.useState("");
    const [text, setText] = React.useState("");

    const Button = () => {
        if(product.stock === 0) {
            return <Link to='/products'><button className="item__detail-btn-cart mt-2">Ir a la tienda</button></Link>
        } else {
            return <button className="item__detail-btn-cart mt-2" onClick={() => addItem(product, count, size, setText)}>Agregar al carrito</button>
        }
    }

    const handleSize = (event) => setSize(event);
    const getBtnSizeClass = (currentSize) => {
        return `item__detail-talles-btn${currentSize === size  ? '-active' : ''}`;
    }

    return (
        <section className="bg-light p-70">
            {
                id ? 
                (
                <div className="container d-flex item__detail">
                    <div className="col-md-8 item__detail-img">
                        <img className="img-fluid" src={product.img} />
                    </div>
                    <div className="col-md-4 p-3 line">
                        <div className="item__detail-info">
                            <p href="#" className="mb-3 item__detail-info-name">{product.title}</p>
                            <div className="item__detail-marca mb-3">
                                <p className="">{product.brand}</p>
                                <RatingStar/>
                            </div>
                        
                            <p className="item__detail-info-price mt-3">${product.price}</p>
                        </div>
                        <p className="mt-4 mb-2">Talle:</p>
                        <div className="item__detail-talles">
                            <button onClick={() => handleSize('S')} type="button" class={getBtnSizeClass('S')} >S</button>
                            <button onClick={() => handleSize('M')} type="button" class={getBtnSizeClass('M')} >M</button>
                            <button onClick={() => handleSize('L')} type="button" class={getBtnSizeClass('L')} >L</button>
                            <button onClick={() => handleSize('XL')} type="button" class={getBtnSizeClass('XL')} >XL</button>
                        </div>
                        <p style={{color: 'rgb(205, 9, 9)'}}>{text}</p>
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
                                    <Link to='/products'><button className="item__detail-btn-link-buy mt-2">Seguir comprando</button></Link>
                                    </>
                                )
                                : (
                                    <>
                                    <ItemCount
                                    count={count}
                                    setCount={setCount}
                                    stock={product.stock}
                                    className="item__detail-count"
                                    />
                                    <Button/>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
                ) :
                (
                <div className="container-lg">
                    <div className="cart__container-empty">
                        <h1>El producto no existe</h1>
                        <a href="/products">
                            <button className="item__detail-btn-link-buy">Ir a la tienda</button>
                        </a>
                    </div>
                </div>
                
                )
            }
        </section>
    )
}