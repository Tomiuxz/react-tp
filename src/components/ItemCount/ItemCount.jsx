import { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function ItemCounter({ initial, stock, onAdd }) {
	const [contador, setcontador] = useState(initial);

	const handleAumentar = () => {
		if (contador < stock) {
			setcontador(contador + 1);
		}
	};

	const handleRestar = () => {
		if (contador > initial) {
			setcontador(contador - 1);
		}
	};

	const agregar = () => {
		onAdd(contador);
	};

	return (
		<div className="container">
			<div className="card text-center my-2">
				<div className="card-body">
					<div className="my-3">
						<h2 className="my-3"> {contador} </h2>
						<button className="btn btn-success mx-3" onClick={handleAumentar}>
							{" "}
							+{" "}
						</button>
						<button className="btn btn-danger mx-3" onClick={handleRestar}>
							{" "}
							-{" "}
						</button>
            <div>
						<button className="btn btn-outline-primary my-3" onClick={agregar}>
							Agregar al carrito
						</button>
            </div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ItemCounter;
