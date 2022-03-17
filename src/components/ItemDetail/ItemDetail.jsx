import React from "react";

const ItemDetail = (props) => {
	const { name, category, stock, price, img } = props.product;
	return (
		<div>
			<img src={img} alt={name} />
			<h1>{name}</h1>
			<h4>{category}</h4>
			<h4>Stock: {stock}</h4>
			<h4>Price: ${price}</h4>
		</div>
	);
};

export default ItemDetail;