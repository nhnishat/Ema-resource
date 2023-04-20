import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthUserContext } from '../Component/Auth/AuthProvider';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthUserContext);
	const location = useLocation();
	console.log(location);
	if (loading) {
		return <div>loading...</div>;
	}
	if (user) {
		return children;
	}
	return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
