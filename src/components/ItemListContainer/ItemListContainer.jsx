import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import getProducts from "../../helpers/getProducts";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
	const [listProducts, setListProducts] = useState([]);
	const { categoria } = useParams();

	useEffect(() => {
		getProducts()
			.then((data) => {
				setListProducts(
					categoria ? data.filter((item) => item.category === categoria) : data);
			})
			.catch((err) => console.log(err));
	}, [categoria]);

	return (
		<div className="container py-4">
			<h1>Item List</h1>
			<ItemList listProducts={listProducts} />
		</div>
	);
};

export default ItemListContainer;
