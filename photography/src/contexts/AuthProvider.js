import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext =createContext();
const auth =getAuth(app)
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const [loading, setLoading] = useState(true)


    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
      }

      const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      }



      const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
      }




      const authInfo = {
        signInWithGoogle,
        signin,
        createUser
      }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;