import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthUserContext } from '../Auth/AuthProvider';
import './Header.css';
const Header = () => {
	const { user } = useContext(AuthUserContext);
	console.log(user);
	return (
		<nav className="header">
			<img src={logo} alt="" />
			<div className="">
				<Link to="/">Shop</Link>
				<Link to="/orders">Order</Link>
				<Link to="/inventory">Inventory</Link>
				<Link to="/login">Login</Link>
				<Link to="/singup">SingUp</Link>
				{/* {user && <span>Welcome{user.email}</span>} */}
			</div>
		</nav>
	);
};

export default Header;
