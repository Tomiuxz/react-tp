import { Link, useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { useContext, useEffect, useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { collection, getDocs, query, where } from "firebase/firestore";
import { UIContext } from "../Context/UIContext";

export const ItemListContainer = () => {
	const [listProducts, setListProducts] = useState([]);
	const { cat } = useParams();
	const { loading, setLoading } = useContext(UIContext);

	useEffect(() => {
		const getData = async () => {
			const col = collection(db, "items");
			let response;
			if (cat) {
				let q = query(col, where("category", "==", cat));
				response = await getDocs(q);
			} else {
				response = await getDocs(col);
			}
			console.log(cat);
			console.log("respuesta", response);
			console.log("info-documento", response.docs[0].data());
			console.log("id-documento", response.docs[0].id);

			const dataItems = response.docs.map((doc) => {
				return { id: doc.id, ...doc.data() };
			});
			console.log("dataItems", dataItems);
			setListProducts(dataItems);
		};
		setLoading(true);
		getData();
		setLoading(false);
	}, [cat, setLoading]);

	return (
		<div className="menu">
			{loading ? (
				<Spinner animation="border" variant="warning" />
			) : (
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
			)}
		</div>
	);
};

export default ItemListContainer;
