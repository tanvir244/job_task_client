import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../../../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);

    // Register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Sign Out 
    const logOut = () => {
        return signOut(auth);
    }

    // update user profile
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        }).then(() => {
            setUser({...user, displayName: name, photoURL: image});
        }).catch(error => {
            console.error('Error updating profile', error);
        })
    }

    // keep user login until logout 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, [])



    const userInfo = {
        user,
        createUser,
        updateUserProfile,
        login,
        logOut
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;