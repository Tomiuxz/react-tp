import { doc, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useState, useEffect } from "react";
import { db } from "../../utils/firebase";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const { productId } = useParams();

	useEffect(() => {
		const getData = async () => {
			const queryDoc = doc(db, "items", productId);
			const responseDoc = await getDocs(queryDoc);
			const dataDoc = responseDoc.data();
			console.log("info-documento-unico", dataDoc);
			console.log("id-documento-unico", responseDoc.id);
			const newDocumento = { id: responseDoc.id, ...dataDoc };
			console.log("newDocumento", newDocumento);
		};
		getData();
	}, [productId]);

	return (
		<div className="py-4">
			<ItemDetail product={product} />
		</div>
	);
};

export default ItemDetailContainer;
