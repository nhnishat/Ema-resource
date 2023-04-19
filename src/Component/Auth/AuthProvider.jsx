import React, { createContext } from 'react';
export const AuthUserContext = createContext(null);
const AuthProvider = ({ children }) => {
	const user = { displayName: 'nishat' };

	const authInfo = {
		user,
	};

	return (
		<AuthUserContext.Provider value={authInfo}>
			{children}
		</AuthUserContext.Provider>
	);
};

export default AuthProvider;
