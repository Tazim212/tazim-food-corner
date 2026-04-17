import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../Layout/AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../../public/firebase_auth';

const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signedUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSigned = ()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const signedOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log("user", currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe()
        }
    }, [])

   const userInfo = {
    user,
    loading,
    createUser,
    signedUser,
    googleSigned,
    signedOut
   }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;