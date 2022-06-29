import NavBar from "../../components/NavBar/NavBar";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
export default function Home () {
  return (
    <div className="App"> 
      <NavBar category1='Productos' category2='Ayuda' category3='Acerca de' category4='Contacto' />      
      <Main texto={'Flex'} texto2={'Explora tendencias'} categories={'¡Categorias!'}/>
      <Footer/>
    </div>
  )
}