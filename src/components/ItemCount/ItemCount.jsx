import { useState } from "react";
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
		<div className="container d-flex justify-content-center">
			<div className="text-center">
				<div className="card-body">
					<div className="">
						<h2 className=""> {contador} </h2>
						<button className="btn btn-success mx-3" onClick={handleAumentar}>
							{" "}
							+{" "}
						</button>
						<button className="btn btn-danger mx-3" onClick={handleRestar}>
							{" "}
							-{" "}
						</button>
						<div>
							<button
								className="btn btn-outline-warning my-2"
								onClick={agregar}
							>
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
