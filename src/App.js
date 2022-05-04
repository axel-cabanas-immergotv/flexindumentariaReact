import Header from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"

export default function App() {
  return (
    <div className="App">
      <Header category1= {'Compra'} category2= {'Ayuda'} category3= {'Acerca de'} category4= {'Contacto'} />
      <ItemListContainer texto={'Flex'} texto2={'Indumentaria'} gretting={'¡Bienvenido!'}/>
    </div>
  );
}