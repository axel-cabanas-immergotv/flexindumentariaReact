import React from "react";
import axios from "axios";
import ItemDetail from "../ItemDetail/ItemDetail";
import Item from "../Item/Item";

export default function ItemDetailContainer ({productId}) {
    const [item, setItem] = React.useState({});
    const getItem = () => {
        axios.get(`https://627d9659b75a25d3f3a90db6.mockapi.io/products/items/${productId}`)
        .then(res => {
            setItem(res.data)
        })
    }
    React.useEffect(() => {
        getItem();
    }, []);

    return <ItemDetail product={item} />;
}