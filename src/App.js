import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

export default function App() {
  return (
    <div className="App">
      <NavBar category1= {'Compra'} category2= {'Ayuda'} category3= {'Acerca de'} category4= {'Contacto'} />
      <Main texto={'Flex'} texto2={'Explora tendencias'} gretting={'¡Bienvenido!'}/>
      <ItemListContainer/>
    </div>
  );
}