import NavBar from "../../components/NavBar/NavBar";
import Main from "../../components/Main/Main";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
export default function Home () {
  return (
    <div className="App"> 
      <NavBar imgCart='./assets/cart.png' category1='Productos' category2='Ayuda' category3='Acerca de' category4='Contacto' img={'./assets/logoflex.png'} />
      <Main texto={'Flex'} texto2={'Explora tendencias'} categories={'¡Categorias!'}/>
    </div>
  )
}