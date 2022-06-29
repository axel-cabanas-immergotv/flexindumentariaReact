import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "../../components/NavBar/NavBar";

export default function Product (){
    const {productId} = useParams();
    return(
        <div>
            <NavBar category1='Productos' category2='Ayuda' category3='Acerca de' category4='Contacto' />
            <ItemDetailContainer productId={productId}/> 
            <Footer/>
        </div>
    ) 
}