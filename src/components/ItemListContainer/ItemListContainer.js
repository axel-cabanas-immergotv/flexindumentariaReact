import React from "react";
import axios from "axios";
import ItemList from "../ItemList/ItemList";
import { CartContext } from "../../context/CartContext/CartContext";

export default function ItemListContainer ({categoryId}) {
    const [productos, setProductos] = React.useState([]);
    const { IconLoading } = React.useContext(CartContext);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        axios.get(`https://627d9659b75a25d3f3a90db6.mockapi.io/products/items`)
        .then(res => {
            const { data: items } = res;
            if(categoryId) {
                const itemsFiltered = items.filter(item => item.category_id === categoryId);
                setProductos(itemsFiltered);
            } else {
                setProductos(items);
            }
        })
        .catch(error => {console.error(error)})
    }, [])

    setTimeout(() => {
        setIsLoading(false);
    }, 1500);

    return isLoading ? <IconLoading/> : <ItemList products={productos} />;
}