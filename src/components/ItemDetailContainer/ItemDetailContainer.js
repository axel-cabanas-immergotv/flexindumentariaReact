import React from "react";
import axios from "axios";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer ({productId}) {
    const [producto, setProducto] = React.useState([]);
    React.useEffect(() => {
        axios.get(`https://627d9659b75a25d3f3a90db6.mockapi.io/products/items/${productId}`)
        .then(res => {
            setProducto(res.data)
        })
    }, [])
    
    
    return <ItemDetail product={producto} />;
}