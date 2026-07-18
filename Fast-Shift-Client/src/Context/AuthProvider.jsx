import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebaseInit';
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUsingEmailAndPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUsingEmailAndPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unSubscribe();
        }
    }, [])
    const userInfo = {
        user,
        loading,
        logOut,
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