import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createUser = (email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email, password)
    }
    const logOut= () =>{
        setLoader(true)
        return signOut(auth)
    }
    const social = () =>{
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoader(false)
            console.log(currentUser)
        })
        return () =>{
            return unsubscribe()
        }
    }, [])
    
    const authInfo = {

            user,
            loader,
            createUser,
            logIn,
            logOut,
            social
    }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;