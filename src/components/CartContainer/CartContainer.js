import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext/CartContext";
import NavBar from "../NavBar/NavBar";
import Cart from "../../views/Cart/Cart";
import Footer from "../Footer/Footer";

export default function CartContainer () {
    const { cart, clear } = React.useContext(CartContext);
    const cartMap = cart.map(item => {return <Cart  product={item} key={item.id} />})

    return (
        <section>
            <div className="container-lg pb-5">
                {
                    cart.length === 0 ? 
                    (
                        <>
                        <NavBar display='none' category1='Productos' category2='Ayuda' category3='Acerca de' category4='Contacto' />
                        <div className="cart__container-empty">
                            <h1>No hay nada en el carrito</h1>
                            <Link to='/products'>
                                <button className="item__detail-btn-link-buy">
                                    Comprar ahora
                                </button>
                            </Link>
                        </div>
                        </>
                    )
                    :
                    (
                        <>
                        <NavBar category1='Productos' category2='Ayuda' category3='Acerca de' category4='Contacto' />
                        <div className="cart__container-header col-md-12">
                            <ul className="d-flex">
                                <li className="cart__container-header-cart">Carrito ({cart.length})</li>
                                <li className="cart__container-header-saved">Guardados (0)</li>
                            </ul>
                        </div>
                        {cartMap}
                        <div className="cart__container-btn">
                            <Link to='/checkout'><button className="item__detail-btn-cart">Continuar compra</button></Link>
                            <button onClick={() => clear()} className="item__detail-btn-link-buy mt-2">Eliminar todo</button>
                        </div>
                        </>
                    )
                }
            </div>
            <Footer/>
        </section>
    )
}