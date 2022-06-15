import React from "react";
import axios from "axios";
import { CartContext } from "../../context/CartContext/CartContext";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, getFirestore, doc } from "firebase/firestore";

export default function ItemDetailContainer ({productId}) {
    const [producto, setProducto] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const { IconLoading } = React.useContext(CartContext);

    React.useEffect(() => {
        const db = getFirestore();
        const productRef = doc(db, "productos", productId);
        getDoc(productRef).then(snapshot => {
            if(snapshot.exists()) {
                setProducto({id: snapshot.id, ...snapshot.data()});
            }
        })
    }, [productId]);
    
    setTimeout(() => {
        setIsLoading(false);
    }, 1000);

    return isLoading ? <IconLoading/> : <ItemDetail product={producto} />
}