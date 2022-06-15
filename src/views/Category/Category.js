import NavBar from "../../components/NavBar/NavBar";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
export default function Category() {
  const { categoryId } = useParams();
  return (
      <div>
        <NavBar category1='Productos' category2='Ayuda' category3='Acerca de' category4='Contacto' />
        <ItemListContainer categoryId={categoryId} />
      </div>
  );
}