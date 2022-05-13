import React from "react";
import axios from "axios";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer () {
    const [productos, setProductos] = React.useState([])
    React.useEffect(() => {
        axios.get('https://627d9659b75a25d3f3a90db6.mockapi.io/products/items')
        .then(res => {setProductos(res.data)})
        .catch(error => {console.error(error)})
    }, [])
    const [resultado, setResultado] = React.useState([]);
    const obtenerProducto = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productos);
        }, 2000);
      });

    obtenerProducto
    .then(productos => {
        setResultado(productos);
    })
    .catch(error => {
        console.log('hubo error intente mas tarde');
    });

    return <ItemList products={resultado} />
}