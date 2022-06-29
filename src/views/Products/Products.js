import NavBar from "../../components/NavBar/NavBar";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Footer from "../../components/Footer/Footer";

export default function Products () {
    return (
        <div>
            <NavBar category1='Productos' category2='Ayuda' category3='Acerca de' category4='Contacto' />
            <ItemListContainer/>
            <Footer/>
        </div>
    )
}