import React, { useState, useEffect } from "react";
import getProducts from "../../helpers/getProducts";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	// const { productId } = useParams();
	const productId = 3;

	useEffect(() => {
		getProducts()
			.then((data) => setProduct(data.find((item) => item.id === productId)))
			.catch((err) => console.log(err));
	}, [productId]);

  console.log(product);

	return (
		<div className="py-4">
			<ItemDetail product={product} />
		</div>
	);
};

export default ItemDetailContainer;
