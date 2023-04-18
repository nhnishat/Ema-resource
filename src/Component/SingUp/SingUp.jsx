import React from 'react';
import './SingUp.css';

const SingUp = () => {
	return (
		<div className="login-Container">
			<h2 className="form-title">Sing Up</h2>
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
					<label htmlFor="email">Password</label>
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
		</div>
	);
};

export default SingUp;
