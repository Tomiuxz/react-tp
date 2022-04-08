import React from "react";
import validacion from "./validacion";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import { Card } from "react-bootstrap";
import { useState } from "react";
import {
	getFirestore,
	collection,
	addDoc,
	query,
	where,
	documentId,
	writeBatch,
	getDocs,
} from "firebase/firestore";

const Cart = () => {
	const [id, setId] = useState("");
	const [dataForm, setDataForm] = useState({
		email: "",
		tel: "",
		name: "",
	});

	const { cartList, vaciarCarrito, borrarItem, sumaTotal } = useCartContext();
	console.log({ cartList });

	const realizarCompra = async (e) => {
		e.preventDefault();

		let orden = {};

		orden.buyer = dataForm;
		orden.total = sumaTotal();
		orden.items = cartList.map((cartItem) => {
			const id = cartItem.item.id;
			const nombre = cartItem.item.name;
			const precio = cartItem.item.price * cartItem.cantidad;
			const cantidad = cartItem.cantidad;

			return {
				id,
				nombre,
				precio,
				cantidad,
			};
		});

		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		await addDoc(ordersCollection, orden).then((resp) => setId(resp.id));
		const queryCollection = collection(db, "Items");

		const queryUpdateStock = query(
			queryCollection,
			where(
				documentId(),
				"in",
				cartList.map((it) => it.item.id)
			)
		);
		const batch = writeBatch(db);
		await getDocs(queryUpdateStock)
			.then((resp) =>
				resp.docs.forEach((res) =>
					batch.update(res.ref, {
						stock:
							res.data().stock -
							cartList.find((item) => item.id === res.id).cantidad,
					})
				)
			)
			.catch((err) => console.log(err))
			.finally(() => {
				setDataForm({
					email: "",
					tel: "",
					name: "",
				});
				vaciarCarrito();
			});
		batch.commit();
	};

	const [errors, setErrors] = useState({});

	const handleChange = (event) => {
		setErrors(validacion(dataForm));
		setDataForm({
			...dataForm,
			[event.target.name]: event.target.value,
		});
	};

	console.log(dataForm);

	return (
		<div>
			{id !== "" && `El id de la orden es : ${id} `}
			<br />

			{cartList.length !== 0 ? (
				<>
					<div>
						<h1>Productos en Carrito:</h1>
					</div>

					{cartList.map((product) => (
						<div key={product.id} className="d-flex justify-content-center">
							<Card className="mb-3 bg-dark w-25">
								<Card.Img src={product.img} alt="product" className="" />
								<Card.Body>
									<Card.Title>
										<h1>{product.name}</h1>
									</Card.Title>
									<Card.Text>
										<h4>{product.category}</h4>
										<h4>Precio: ${product.price}</h4>
										<h4>Cantidad: {product.cantidad}</h4>
									</Card.Text>
									<button
										className="btn btn-primary"
										onClick={() => borrarItem(product.id)}
									>
										x
									</button>
								</Card.Body>
							</Card>
						</div>
					))}

					<h2 className="container p-2 border-top border-bottom">{`El total es $ ${sumaTotal()}`}</h2>

					<div>
						<button className="btn btn-danger my-2" onClick={vaciarCarrito}>
							Vaciar Carrito
						</button>
					</div>
				</>
			) : (
				<div>
					<h1>No hay productos en el carrito</h1>
				</div>
			)}

			<form onSubmit={realizarCompra}>
				<input
					type="texto"
					name="name"
					placeholder="Nombre Completo"
					onChange={handleChange}
					value={dataForm.name}
				/>
				<br />
				{errors.name && <p className="error">{errors.name}</p>}

				<input
					type="numero"
					name="tel"
					placeholder="Telefono"
					onChange={handleChange}
					value={dataForm.tel}
				/>
				<br />
				{errors.tel && <p className="error">{errors.tel}</p>}

				<input
					type="email"
					name="email"
					placeholder="Direccion Email"
					onChange={handleChange}
					value={dataForm.email}
				/>
				<br />

				{errors.email && <p className="error">{errors.email}</p>}

				<input
					type="email"
					name="validarEmail"
					placeholder="Repetir Email"
					onChange={handleChange}
				/>

				<br />

				<button className="orden btn btn-success">Generar Orden</button>
			</form>

			<button className="btn btn-warning my-2">
				<Link to="/">Volver al Home</Link>
			</button>
		</div>
	);
};

export default Cart;
