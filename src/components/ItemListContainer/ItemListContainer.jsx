import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({greetings}) => {
	
  function onAdd(cant) {
		console.log(cant);
	}

	return (
		<div>
			<h1>Item List</h1>
      {greetings}
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
		</div>
	);
};

export default ItemListContainer;
