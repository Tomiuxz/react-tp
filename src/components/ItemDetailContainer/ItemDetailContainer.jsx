import React, { useState, useEffect } from "react";
import getProducts from "../../helpers/getProducts";
import ItemDetail from "../ItemDetail/ItemDetail";
// import ItemCount from "../ItemCount/ItemCount";
// import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	// const { productId } = useParams();
	const productId = 2;

	useEffect(() => {
		getProducts()
			.then((data) => setProduct(data.find((item) => item.id === productId)))
			.catch((err) => console.log(err));
	}, [productId]);

	// function onAdd(cant) {
	// 	console.log(cant);
	// }

	return (
		<div className="container py-4">
			<ItemDetail product={product} />
		</div>
	);
};

export default ItemDetailContainer;
