import React from "react";
import ItemList from "../ItemList/ItemList";
import { products } from "../Products/Products";

export default function ItemListContainer () {
    const [resultado, setResultado] = React.useState([]);
    const obtenerProducto = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      });

    obtenerProducto
    .then(products => {
        setResultado(products);
    })
    .catch(error => {
        console.log('hubo error intente mas tarde');
    });

    return <ItemList products={resultado} />
}