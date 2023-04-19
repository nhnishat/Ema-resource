import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../../FireBase/firebase-config';
export const AuthUserContext = createContext(null);
const AuthProvider = ({ children }) => {
	const auth = getAuth(app);
	const [user, setUser] = useState(null);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const authInfo = {
		user,
		createUser,
	};

	return (
		<AuthUserContext.Provider value={authInfo}>
			{children}
		</AuthUserContext.Provider>
	);
};

export default AuthProvider;
