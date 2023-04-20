import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthUserContext } from '../Auth/AuthProvider';
import './Login.css';

const LogIn = () => {
	const [show, setShow] = useState();
	const { logInUser } = useContext(AuthUserContext);
	const navigate = useNavigate();
	const [error, setError] = useState('');
	const location = useLocation();
	console.log(location);
	const from = location.state?.from?.pathname || '/';

	const handleLogInUser = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		logInUser(email, password)
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
				form.reset();
				setError('');
				navigate(from, { replace: true });
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	return (
		<div className="login-Container">
			<h2 className="form-title">Log in</h2>
			<form onSubmit={handleLogInUser}>
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
					<label htmlFor="email">Password</label>
					<p className="color-text">{error}</p>
					<input
						type={show ? 'text' : 'password'}
						name="password"
						placeholder="Enter your password"
						required
					/>
					<p onClick={() => setShow(!show)}>
						<small>
							{show ? <span>Hide password</span> : <span>Show password</span>}
						</small>
					</p>
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
