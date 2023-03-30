import React from 'react';
import './Product.css';
const Product = (props) => {
	const { name, price, seller, ratings, img } = props.product;
	return (
		<div className="product">
			<img src={img} alt="" />
			<div className="product-info">
				<h5 className="product-name">{name}</h5>
				<p>Price: ${price}</p>
				<p>Manufacturer: {seller}</p>
				<p>Rating:{ratings}</p>
			</div>
			<button className="btn-cart" onClick={handlerAddCart}>
				Add to Cart
			</button>
		</div>
	);
};

export default Product;
