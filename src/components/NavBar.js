export default function NavBar () {
    return (
        <header className="header">
            <div className="header-logo">
                <img src="./assets/logoflex.png" alt="logo FlexIndumentaria" />
                <p>Flex <p>Indumentaria</p></p>
            </div>
            <ul className="header-menu">
                <li><a href="#">Compra</a></li>
                <li><a href="#">Ayuda</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </header>
    )
}