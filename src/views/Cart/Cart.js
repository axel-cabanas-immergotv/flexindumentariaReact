import React from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";

export default function Cart ({product}) {
    const { cart } = React.useContext(CartContext);
    return (
        <div>
                <>
                <div>
                    <div>
                        <ul>
                            <li>Carrito ({cart.length})</li>
                            <li>Guardados (0)</li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <img src={`../../${product.img}`} />
                        </div>
                        <div>
                            <a>{product.nombre}</a>
                        </div>
    
                    </div>
                </div>
                </>
        </div>
    )
}