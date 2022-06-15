import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

export default function NavBar ({category1, category2,category3,category4, imgCart, display}) {
    return (
        <Navbar bg="light" expand="lg">
            <div className='container'>
                <Link className='header-logo' to='/'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/flexindumentaria-71aa7.appspot.com/o/assets%2Flogoflex.png?alt=media&token=104f7643-7e2f-42a7-adbc-2f931a502b7e' alt="logo FlexIndumentaria" />
                    <p>Flex <span>Indumentaria</span></p>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className=' header__menu'>
                    <Nav>
                        <Link className='header__menu-items nav-link' to='/products'>
                            {category1}
                        </Link>
                        <Nav.Link className='header__menu-items'>{category2}</Nav.Link>
                        <Nav.Link className='header__menu-items'>{category3}</Nav.Link>
                        <Nav.Link className='header__menu-items'>{category4}</Nav.Link>
                        <Link className='header__menu-items nav-link' to='/cart'><CartWidget display={display} /></Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}