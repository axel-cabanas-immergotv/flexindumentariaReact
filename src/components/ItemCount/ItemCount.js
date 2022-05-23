import React from "react";

export default function ItemCount ({stock, onAdd}){
    const [count, setCount] = React.useState(1);
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

    const onSave = () => {
        onAdd(count);
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
                        <button className="item__detail-btn-cart mt-2" onClick={onSave}>Agregar al carrito</button>
                    </> 
                )
            }
        </div>
    )
    
}