import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import getProducts from "../../helpers/getProducts";


const ItemListContainer = ({ greetings }) => {
	const [listProducts, setListProducts] = useState([]);

	useEffect(() => {
		getProducts()
			.then((data) => setListProducts(data))
			.catch((err) => console.log(err));
	}, []);

	function onAdd(cant) {
		console.log(cant);
	}

	return (
		<div>
			<h1>Item List</h1>
			{greetings}
			<ItemList listProducts={listProducts} />
			<ItemCount initial={1} stock={5} onAdd={onAdd} />
		</div>
	);
};

export default ItemListContainer;
