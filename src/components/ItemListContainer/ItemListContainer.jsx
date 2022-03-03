import React from "react";

const ItemListContainer = ({greetings}) => {
	// console.log(props);
	return (
		<div>
			<h1>Item List</h1>
      {greetings}
		</div>
	);
};

export default ItemListContainer;
