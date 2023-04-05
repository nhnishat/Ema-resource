import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
	const cart = useLoaderData();
	console.log(cart);
	return (
		<div className="shop-container">
			<div className="product-container">
				<h1>Orders Page {cart.length}</h1>
				{cart.map((product) => (
					<ReviewItem key={product.id} product={product} />
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Orders;
