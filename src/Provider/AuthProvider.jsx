import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase.init';
 export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {
   
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const singInuser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser=()=>{
        return signOut(auth)
    }

    useEffect( ()=>{
        const unScribe=onAuthStateChanged(auth,currentUser =>{
            console.log('user login',currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unScribe()
        }
    },[])

    const authInfo={
        user,
        createUser,
        singInuser,
        signOutUser,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;