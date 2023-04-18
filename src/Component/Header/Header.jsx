import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
	return (
		<nav className="header">
			<img src={logo} alt="" />
			<div className="">
				<Link to="/">Shop</Link>
				<Link to="/orders">Order</Link>
				<Link to="/inventory">Inventory</Link>
				<Link to="/login">Login</Link>
				<Link to="/singup">SingUp</Link>
			</div>
		</nav>
	);
};

export default Header;
