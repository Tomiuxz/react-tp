import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import "../Item/item.css";

const ItemDetail = ({ product }) => {
	const [contador, setContador] = useState(0);

	const { cartList, agregarAlCarrito } = useCartContext();

	const { name, category, price, img } = product;

	function onAdd(cant) {
		setContador(cant);
		agregarAlCarrito({ ...product, cantidad: cant });
	}

  console.log(cartList)

	return (
		<div className="d-flex justify-content-center">

			<Card className="mb-3 bg-dark w-25">
				<Card.Img src={img} alt="product" className="" />
				<Card.Body>
					<Card.Title>
						<h1>{name}</h1>
					</Card.Title>
					<Card.Text>
						<h4>{category}</h4>
						<h4>Precio: ${price}</h4>
					</Card.Text>
				</Card.Body>
			</Card>

			<div>
				{contador === 0 ? (
					<ItemCount initial={1} stock={5} onAdd={onAdd} />
				) : (
					<>
						<div className="card-body mx-2 btn-group">
							<Link to="/cart">
								<button className="btn btn-primary p-2 mb-2">
									Terminar compra
								</button>
							</Link>
							<Link to="/">
								<button className="btn btn-success p-2">
									Seguir comprando
								</button>
							</Link>
						</div>
					</>
				)}
			</div>

		</div>
	);
};

export default ItemDetail;
