import React from 'react';
import './card.css';
const Cart = ({ cart }) => {
	let totalPrice = 0;
	let totalShipping = 0;
	let quantity = 0;
	for (const product of cart) {
		if (product.quantity === 0) {
			product.quantity = 1;
		}
		// product.quantity = product.quantity || 1;
		totalPrice = totalPrice + product.price * product.quantity;
		totalShipping = totalShipping + product.shipping;
		quantity = quantity + product.quantity;
	}
	const text = (totalPrice * 7) / 100;
	const gradPrice = totalPrice + totalShipping + text;
	return (
		<div className="cart">
			<h4>shop cart here</h4>
			<p>Selected Item: {quantity}</p>
			<p>Price:{totalPrice} </p>
			<p>Total Shipping: {totalShipping} </p>
			<p>Text: {text.toFixed(2)}</p>
			<h3>Grand Total:{gradPrice.toFixed(2)} </h3>
		</div>
	);
};

export default Cart;
