import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../FireBase/firebase-config';
export const AuthUserContext = createContext(null);
const AuthProvider = ({ children }) => {
	const auth = getAuth(app);
	const [user, setUser] = useState(null);
	// loading
	const [loading, setLoading] = useState(true);
	// create account with firebase

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// login account with firebase
	const logInUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	// logOutUser firebase
	const logOutUser = () => {
		return signOut(auth);
	};

	// observer on state change

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
		// stop observing while unmounting
		return () => {
			return unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		createUser,
		logInUser,
		logOutUser,
		loading,
	};

	return (
		<AuthUserContext.Provider value={authInfo}>
			{children}
		</AuthUserContext.Provider>
	);
};

export default AuthProvider;
