import React from "react";
import Item from "../Item/Item";

const ItemList = ({ listProducts }) => {
	return (
		<>
			{listProducts.map((elem) => (
				<Item
					key={elem.id}
					img={elem.img}
					name={elem.name}
					stock={elem.stock}
					price={elem.price}
					category={elem.category}
					id={elem.id}
				/>
			))}
		</>
	);
};

export default ItemList;
