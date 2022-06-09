import React from "react";
import axios from "axios";
import { CartContext } from "../../context/CartContext/CartContext";
import { getFirestore, where, collection, getDocs, query } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer ({categoryId}) {
    const [productos, setProductos] = React.useState([]);
    const { IconLoading } = React.useContext(CartContext);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const db = getFirestore();
        if(categoryId) {
            const q = query(
                collection(db, "productos"),
                where("category_id", "==", categoryId)
            );
            getDocs(q).then(snapshots => {
                const data = snapshots.docs.map((doc) => ({id: doc.id, ...doc.data()}));
                setProductos(data);
            })
        } else {
            const productsRef = collection(db, "productos");
            getDocs(productsRef).then(snapshots => {
                setProductos(snapshots.docs.map((doc) => ({id: doc.id, ...doc.data()})));
            })
        }
    }, [categoryId]);

    setTimeout(() => {
        setIsLoading(false);
    }, 1500);

    return isLoading ? <IconLoading/> : <ItemList products={productos} />;
}