import { Link } from "react-router-dom";
import { db } from "../../utils/firebase";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore";

export const ItemListContainer = () => {
	const [listProducts, setListProducts] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const query = collection(db, "items");
			const response = await getDocs(query);
			console.log("respuesta", response);
			console.log("info-documento", response.docs[0].data());
			console.log("id-documento", response.docs[0].id);

			const dataItems = response.docs.map((doc) => {
				return { id: doc.id, ...doc.data() };
			});
			console.log("dataItems", dataItems);
			setListProducts(dataItems);
		};
		getData();
	}, []);

	return (
		<div className="pt-2">
			{listProducts.map((product) => (
				<div className="container d-flex justify-content-center">
					<Card className="mb-3 bg-dark w-25">
						<Card.Img src={product.img} alt="product" className="" />
						<Card.Body>
							<Card.Title>
								<h1>{product.name}</h1>
							</Card.Title>
							<Card.Text>
								<h4>{product.category}</h4>
								<h4>Precio: ${product.price}</h4>
								<h4>Stock: {product.stock}</h4>
							</Card.Text>
							<Link to={`/detail/${product.id}`}>
								<Button variant="primary">Detalles</Button>
							</Link>
						</Card.Body>
					</Card>
				</div>
			))}
		</div>
	);
};

export default ItemListContainer;
