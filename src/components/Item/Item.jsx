import React from "react";
import { Card } from "react-bootstrap";
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
				</Card.Body>
			</Card>
		</div>
		// </div>
	);
};

export default Item;
