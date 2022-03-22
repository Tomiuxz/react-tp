import React from "react";
import { Button, Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ id, name, stock, category, price, img }) => {
	return (
		<div className="container d-flex justify-content-center">
			<Card className="mb-3 bg-dark w-25">
				<Card.Img src={img} alt="product" className="" />
				<Card.Body>
					<Card.Title>
						<h1>{name}</h1>
					</Card.Title>
					<Card.Text>
						<h4>{category}</h4>
						<h4>Precio: ${price}</h4>
						<h4>Stock: {stock}</h4>
					</Card.Text>
					<Link to={`/detail/${id}`}>
						<Button variant="primary">Ver más</Button>
					</Link>
				</Card.Body>
			</Card>
		</div>
		// </div>
	);
};

export default Item;
