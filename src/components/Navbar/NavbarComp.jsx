import React, { Component } from "react";
import logo from '../../logo.svg'
import { Nav, Navbar, NavbarBrand, NavDropdown, NavLink } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";


const NavbarComp = () => {
		return (
			<div>
				<Navbar text="white" bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
					<NavbarBrand> <img src={logo} alt="logo" width="60px" height="40px" /> Gaming Gods </NavbarBrand>

					<Navbar.Toggle />

					<NavbarCollapse className="justify-content-end">

						<Nav>
							<NavDropdown title="Productos">
								<NavDropdown.Item href="#products/mouse">Mouse</NavDropdown.Item>
								<NavDropdown.Item href="#products/mouse"> Teclados </NavDropdown.Item>
								<NavDropdown.Item href="#products/mouse"> Auriculares </NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#products/mouse"> Ofertas </NavDropdown.Item>
							</NavDropdown>
							<NavLink href="#productos">Blog</NavLink>
							<NavLink href="#productos">Nosotros</NavLink>
							<NavLink href="#productos">Contáctanos</NavLink>
              <CartWidget href="#cart" className="widget" />
						</Nav>

					</NavbarCollapse>

				</Navbar>
			</div>
		);
	}
export default NavbarComp