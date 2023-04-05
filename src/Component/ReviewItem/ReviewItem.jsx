import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';
const ReviewItem = ({ product, handleRemovedFromCart }) => {
	// console.log(product);
	const { name, img, quantity, id, price } = product;
	return (
		<div className="review-item">
			<img src={img} alt="" />
			<div className="review-details">
				<h3 className="product-title">{name}</h3>
				<p>
					Price: <span className="orange-text">${price}</span>
				</p>
				<p>
					Order Quantity <span className="orange-text">${quantity}</span>
				</p>
			</div>
			<button onClick={() => handleRemovedFromCart(id)} className="btn-delete">
				<FontAwesomeIcon
					className="delete-icon"
					icon={faTrashAlt}
				></FontAwesomeIcon>
			</button>
		</div>
	);
};

export default ReviewItem;
