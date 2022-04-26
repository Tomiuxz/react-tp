import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useState, useEffect } from "react";
import { db } from "../../utils/firebase";
import { Spinner } from "react-bootstrap";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(false);
	const { itemId } = useParams();

	useEffect(() => {
		setLoading(true);
		const getData = async () => {
			const queryDoc = doc(db, "items", itemId);
			const responseDoc = await getDoc(queryDoc, "items", itemId);
			const dataDoc = responseDoc.data();
			const newDocumento = { id: responseDoc.id, ...dataDoc };
			setProduct(newDocumento);
			setLoading(false);
		};
		getData();
	}, [itemId]);

	if (loading) {
		return <Spinner animation="border" variant="warning" />;
	}

	return (
		<div className="py-4">
			<ItemDetail product={product} />
		</div>
	);
};

export default ItemDetailContainer;
