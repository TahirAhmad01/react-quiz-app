import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [loading, setLoading] = useState(true);
	const [currentUser, setCurrentUser] = useState();

	useEffect(() => {
		const auth = getAuth();
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	//signup function
	async function signup(email, password, username) {
		const Auth = getAuth();
		await createUserWithEmailAndPassword(Auth, email, password);

		//update profile
		await updateProfile(Auth.currentUser, {
			displayName: username,
		});

		const user = Auth.currentUser;
		setCurrentUser({
			...user,
		});
	}

	//login function
	function login(email, password) {
		const Auth = getAuth();
		return signInWithEmailAndPassword(Auth, email, password);
	}

	//logout function
	function logout() {
		const Auth = getAuth();
		return signOut(Auth);
	}

	const value = {
		currentUser,
		signup,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
