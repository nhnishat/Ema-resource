import React from 'react';
import './Shop.css';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	useEffect(() => {
		fetch('products.json')
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	const handleAddToCart = (product) => {
		const newCart = [...cart, product];
		setCart(newCart);
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
				<h4>shop cart here</h4>
				<p>cart{cart.length}</p>
			</div>
		</div>
	);
};

export default Shop;
