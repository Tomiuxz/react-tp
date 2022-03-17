import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import getProducts from "../../helpers/getProducts";

const ItemListContainer = ({ greetings }) => {
	const [listProducts, setListProducts] = useState([]);

	useEffect(() => {
		getProducts()
			.then((data) => setListProducts(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<h1>Item List</h1>
			<ItemList listProducts={listProducts} />
		</div>
	);
};

export default ItemListContainer;
