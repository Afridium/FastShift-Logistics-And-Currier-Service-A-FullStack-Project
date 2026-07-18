import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebaseInit';
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const registerUsingEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUsingEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    const userInfo = {
        registerUsingEmailAndPassword,
        loginUsingEmailAndPassword,
        signInWithGoogle
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;