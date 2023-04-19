import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Auth/AuthProvider';
import './SingUp.css';

const SingUp = () => {
	const { createUser } = useContext(AuthUserContext);
	const [error, setError] = useState();
	const handleSingUp = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		const confirm = form.confirm.value;
		console.log(email, password, confirm);

		// password validation
		if (password !== confirm) {
			setError('your password did not match');
			return;
		}
		if (password.length < 6) {
			setError('your password must 6 characters or longer');
			return;
		}
		// firebase account create
		createUser(email, password)
			.then((result) => {
				const loggedUser = result.user;
				setError('');
				form.reset();
				console.log(loggedUser);
			})
			.catch((error) => {
				setError(error.message);
			});
	};
	return (
		<div className="login-Container">
			<h2 className="form-title">Sing Up</h2>
			<form onSubmit={handleSingUp}>
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
					<p className="text-danger">{error}</p>

					<input
						type="password"
						name="password"
						placeholder="Enter your password"
						required
					/>
				</div>
				<div className="form-control">
					<label htmlFor="email">Confirm Password</label>
					<input
						type="password"
						name="confirm"
						placeholder="Enter your password"
						required
					/>
				</div>

				<input className="btn-submit" type="submit" value="Sing up" />
			</form>
			<p>
				Already have an account? <Link to="/login">Login</Link>
			</p>
		</div>
	);
};

export default SingUp;
