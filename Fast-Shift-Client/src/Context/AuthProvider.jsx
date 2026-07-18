import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseInit';

const AuthProvider = ({children}) => {

    const registerUsingEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUsingEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userInfo = {
        registerUsingEmailAndPassword,
        loginUsingEmailAndPassword,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;