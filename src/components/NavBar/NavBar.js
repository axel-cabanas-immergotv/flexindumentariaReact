import { Navbar, Nav } from 'react-bootstrap';
import CartIcon from '../CartWidget/CartWidget';

export default function Header ({category1, category2,category3,category4}) {
    return (
        <Navbar bg="light" expand="lg">
            <div className='container'>
                <a className='header-logo' href="#home">
                    <img src="./assets/logoflex.png" alt="logo FlexIndumentaria" />
                    <p>Flex <span>Indumentaria</span></p>
                </a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className=' header__menu'>
                    <Nav>
                        <Nav.Link className='header__menu-items' href="#link">{category1}</Nav.Link>
                        <Nav.Link className='header__menu-items' href="#link">{category2}</Nav.Link>
                        <Nav.Link className='header__menu-items' href="#link">{category3}</Nav.Link>
                        <Nav.Link className='header__menu-items' href="#link">{category4}</Nav.Link>
                        <Nav.Link className='header__menu-items' href="#link"><CartIcon count= {0} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}