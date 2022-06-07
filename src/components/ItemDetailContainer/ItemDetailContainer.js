import React from "react";
import axios from "axios";
import ItemDetail from "../ItemDetail/ItemDetail";
import { CartContext } from "../../context/CartContext/CartContext";

export default function ItemDetailContainer ({productId}) {
    const [producto, setProducto] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const { IconLoading } = React.useContext(CartContext);

    React.useEffect(() => {
        axios.get(`https://627d9659b75a25d3f3a90db6.mockapi.io/products/items/${productId}`)
        .then(res => {
            setProducto(res.data)
        })
    }, [])
    
    setTimeout(() => {
        setIsLoading(false);
    }, 1500);

    return isLoading ? <IconLoading/> : <ItemDetail product={producto} />
}