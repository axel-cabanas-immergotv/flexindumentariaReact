import React from "react";
import { CartContext } from "../../context/CartContext/CartContext";

export default function ItemCount ({count, setCount, onSubmit ,stock}){
    

    const onIncrease = () => {
        if(count < stock) {
            setCount(count + 1);
        };
    }

    const onDecrease = () => {
        if(count > 1) {
            setCount(count - 1);
        }
    }
        
    return (
        
        <div className="banner__btn-container d-flex">
            {
                stock === 0
                ? (
                    <p>Sin stock</p> 
                )
                : ( 
                    <>
                        <div className="d-flex">    
                            <button className="banner__link-btn" onClick={onIncrease}>+</button>
                            <p>{count}</p>
                            <button className="banner__link-btn" onClick={onDecrease}>-</button>
                        </div>
                        <button className="item__detail-btn-cart mt-2" onClick={onSubmit}>Agregar al carrito</button>
                    </> 
                )
            }
        </div>
    )
    
}