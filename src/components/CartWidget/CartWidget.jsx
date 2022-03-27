import React from "react";
import { Link } from "react-router-dom";

export const CartWidget = () => {
	return (
		<div>
			<Link to="/cart">
				<img src="/trolley.png" alt="carrito" class="cart" />
			</Link>
		</div>
	);
};

export default CartWidget;
