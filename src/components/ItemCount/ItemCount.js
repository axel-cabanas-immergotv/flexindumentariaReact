import React from "react"

export default function ItemCount ({stock}){
    const [count, setCount] = React.useState(0);
    const handdleAdd = () => {
        if(count < stock) {
            setCount(count + 1);
        };
    }

    const handdleRemove = () => {
        if(count === 0) {
            setCount(count + 0);
        }
         else {
            setCount(count - 1)
        }
    }

    return (
        <div className="banner__btn-container d-flex">
            <button className="banner__link-btn px-2" onClick={handdleAdd}>+</button>
            <p>{count}</p>
            <button className="banner__link-btn px-2" onClick={handdleRemove}>-</button>
        </div>
    )
}