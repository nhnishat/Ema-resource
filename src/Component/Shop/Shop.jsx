import React from 'react';
import './Shop.css';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	useEffect(() => {
		fetch('products.json')
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	useEffect(() => {
		const storedCart = getShoppingCart();
		const saveCart = [];
		// step 1
		for (const id in storedCart) {
			// step 2 get the product by using id
			const addedProducts = products.find((product) => product.id === id);
			if (addedProducts) {
				const quantity = storedCart[id];
				addedProducts.quantity = quantity;
				saveCart.push(addedProducts);
			}
			setCart(saveCart);
		}
	}, [products]);
	const handleAddToCart = (product) => {
		// const newCart = [...cart, product];
		let newCart = [];
		// if product doesn't exist in the cart , then set quantity=1
		// if exist update quantity by 1
		const exist = cart.find((product) => product.id == id);
		if (!exist) {
			product.quantity = 1;
			newCart = [...cart, product];
		} else {
			exist.quantity = exist.product + 1;
			const remaining = cart.filter((product) => product.id != product.id);
			newCart = [...remaining, exist];
		}
		setCart(newCart);
		addToDb(product.id);
	};
	return (
		<div className="shop-container">
			<div className="products-container">
				{products.map((product) => (
					<Product
						product={product}
						key={product.id}
						handleAddToCart={handleAddToCart}
					></Product>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Shop;
