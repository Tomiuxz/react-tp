import logo from '../../logo.svg'
import { Nav, Navbar, NavbarBrand, NavDropdown, NavLink } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';


const NavbarComp = () => {
		return (
			<div>
				<Navbar text="white" bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
          <Link to='/' className='header-link'>
					<NavbarBrand> <img src={logo} alt="logo" width="80px" height="60px" /> Gaming Gods </NavbarBrand>
          </Link>

					<Navbar.Toggle />

					<NavbarCollapse className="justify-content-end">

						<Nav className='header-nav'>
              
							<NavDropdown title="Productos">
                <Link to='/productos/mouse' className='header-link'>
								<NavDropdown.Item href="#products/mouse">Mouse</NavDropdown.Item>
                </Link>
                <Link to='/productos/teclados' className='header-link'>
								<NavDropdown.Item href="#products/teclados"> Teclados </NavDropdown.Item>                  
                </Link>
                <Link to='/productos/auriculares' className='header-link'>
								<NavDropdown.Item href="#products/auriculares"> Auriculares </NavDropdown.Item>
                </Link>
								<NavDropdown.Divider />
                <Link to='/productos/ofertas' className='header-link'>
								<NavDropdown.Item href="#products/ofertas"> Ofertas </NavDropdown.Item>
                </Link>
							</NavDropdown>

							<NavLink href="#productos">Blog</NavLink>
							<NavLink href="#productos">Nosotros</NavLink>
							<NavLink href="#productos">Contacto</NavLink>
              <CartWidget href="#cart" className="widget" />
						</Nav>

					</NavbarCollapse>

				</Navbar>
			</div>
		);
	}
export default NavbarComp