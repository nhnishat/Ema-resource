import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
const Orders = () => {
	const savedCart = useLoaderData();
	const [cart, setCart] = useState(savedCart);
	const handleRemovedFromCart = (id) => {
		const remaining = cart.filter((pd) => pd.id !== id);
		setCart(remaining);
		removeFromDb(id);
	};
	const handleClearCart = () => {
		setCart([]);
		deleteShoppingCart();
	};
	// console.log(savedCart);
	return (
		<div className="shop-container">
			<div className="review-container">
				<h1>Orders Page {cart.length}</h1>
				{cart.map((product) => (
					<ReviewItem
						key={product.id}
						product={product}
						handleRemovedFromCart={handleRemovedFromCart}
					/>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart} handleClearCart={handleClearCart}>
					<Link to="/checkout">
						<button>Proceed check</button>
					</Link>
				</Cart>
			</div>
		</div>
	);
};

export default Orders;
