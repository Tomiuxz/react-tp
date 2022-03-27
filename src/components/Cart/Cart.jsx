import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import { Card } from "react-bootstrap";

const Cart = () => {
	const { cartList, vaciarCarrito, borrarItem } = useCartContext();
	console.log({ cartList });

	return (
		<div>
			{cartList.length > 0 && (
				<div>
					<h1>Productos en Carrito:</h1>
				</div>
			)}

			{cartList.map((product) => (
				<div className="d-flex justify-content-center">
					<Card className="mb-3 bg-dark w-25">
						<Card.Img src={product.img} alt="product" className="" />
						<Card.Body>
							<Card.Title>
								<h1>{product.name}</h1>
							</Card.Title>
							<Card.Text>
								<h4>{product.category}</h4>
								<h4>Precio: ${product.price}</h4>
								<h4>Cantidad: {product.cantidad}</h4>
							</Card.Text>
							<button
								className="btn btn-primary"
								onClick={() => borrarItem(product.id)}
							>x</button>
						</Card.Body>
					</Card>
				</div>
			))}
			<div>
				<button className="btn btn-danger my-2" onClick={vaciarCarrito}>
					Vaciar Carrito
				</button>
			</div>
			<button className="btn btn-warning my-2">
				<Link to="/">Volver al Home</Link>
			</button>
		</div>
	);
};

export default Cart;
