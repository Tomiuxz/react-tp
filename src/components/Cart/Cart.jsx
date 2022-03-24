import React from "react";
import { Link } from "react-router-dom";

export const Cart = () => {
	return (
		<>
			<h1>Carrito</h1>
			<button className="btn btn-warning">
				<Link to="/">Volver al Home</Link>
			</button>
		</>
	);
};
