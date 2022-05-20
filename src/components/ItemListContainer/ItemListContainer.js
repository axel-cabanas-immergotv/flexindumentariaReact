import React from "react";
import axios from "axios";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer ({categoryId}) {
    const [productos, setProductos] = React.useState([])
    React.useEffect(() => {
        axios.get(`https://627d9659b75a25d3f3a90db6.mockapi.io/products/items`)
        .then(res => {
            const { data: items } = res;
            if(categoryId) {
                const itemsFiltered = items.filter(item => item.category_id === categoryId)
                setProductos(itemsFiltered)
            } else {
                setProductos(items)
            }
        })
        .catch(error => {console.error(error)})
    }, [])
    return <ItemList products={productos} />
}