import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import CartWidget from "../CartWidget/CartWidget";
import { Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";

const NavbarComp = () => {
	const { cantidad } = useCartContext();

	return (
		<div>
			<Navbar
				text="white"
				bg="dark"
				variant="dark"
				sticky="top"
				expand="sm"
				collapseOnSelect
			>
				<Link to="/" className="header-link">
					<NavbarBrand className="mx-3">Gaming Gods</NavbarBrand>
				</Link>

				<Navbar.Toggle />

				<NavbarCollapse className="justify-content-end">
					<Nav className="header-nav">
						<NavDropdown title="Productos">
							<NavDropdown.Item as={Link} to="/categoria/mouse">
								Mouse
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/categoria/teclado">
								Teclados
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/categoria/auriculares">
								Auriculares
							</NavDropdown.Item>

							<NavDropdown.Divider />

							<NavDropdown.Item as={Link} to="/categoria/ofertas">
								Ofertas
							</NavDropdown.Item>
						</NavDropdown>
						<Link to="/blog" className="header-link">
							Blog
						</Link>
						<Link to="/nosotros" className="header-link">
							Nosotros
						</Link>
						<Link to="/contacto" className="header-link">
							Contacto
						</Link>
						<Link to="/cart">
							<div className="badge">{cantidad() !== 0 && cantidad()}</div>
							<CartWidget />
						</Link>
					</Nav>
				</NavbarCollapse>
			</Navbar>
		</div>
	);
};

export default NavbarComp;
