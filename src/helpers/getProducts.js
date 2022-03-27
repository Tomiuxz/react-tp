import products from "./products";

const getProducts = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(products), 1500);
	});
};

export default getProducts;
