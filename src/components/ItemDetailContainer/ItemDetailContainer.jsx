import React, { useState, useEffect } from "react";
import getProducts from "../../helpers/getProducts";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const productId = 2;

	useEffect(() => {
		getProducts()
			.then((data) => {
				setProduct(data.find((item) => item.id === productId));
			})
			.catch((err) => console.log(err));
	}, []);

	function onAdd(cant) {
		console.log(cant);
	}

	return (
		<div className="container py-4">
			<ItemDetail product={product} />
			<ItemCount initial={1} stock={5} onAdd={onAdd} />
		</div>
	);
};

export default ItemDetailContainer;
