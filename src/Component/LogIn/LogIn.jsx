import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const LogIn = () => {
	return (
		<div className="login-Container">
			<h2 className="form-title">Log in</h2>
			<form>
				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						placeholder="Enter your email"
						required
					/>
				</div>
				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input
						type="password"
						name="password"
						placeholder="Enter your password"
						required
					/>
				</div>

				<input className="btn-submit" type="submit" value="Log in" />
			</form>
			<p>
				New to Ema-john? <Link to="/singup">Create New Account</Link>
			</p>
		</div>
	);
};

export default LogIn;
