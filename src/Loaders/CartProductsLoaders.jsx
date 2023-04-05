import { getShoppingCart } from '../utilities/fakedb';

const CartProductsLoaders = async () => {
	const loadedProduct = await fetch('products.json');
	const product = await loadedProduct.json();
	// if cart is in database,you have async await
	const storedCart = getShoppingCart();
	const saveCart = [];
	for (const id in storedCart) {
		const addedProduct = product.find((pd) => pd.id === id);
		if (addedProduct) {
			const quantity = storedCart[id];
			addedProduct.quantity = quantity;
			saveCart.push(addedProduct);
		}
	}
	// if need to send two things
	// return[product,saveCart]
	// another Option
	// return { product, saveCart };
	return saveCart;
};

export default CartProductsLoaders;
