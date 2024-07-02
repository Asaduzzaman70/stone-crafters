import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const CreateContext = createContext(null);

const auth = getAuth(app);


// 86a2f30e285747e6ff70f400aa55f2671a6e968e
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState('light');

    // loader
    const [loader, setLoader] = useState(true);

    // Register
    const register = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Set User Name, PhotoURL
    const namePhotoUrl = (name, photo) => {
        setLoader(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // login with password
    const logIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google Log in method
    const logInWithMedia = (arg) => {
        if (arg === 'google') {
            const googleProvider = new GoogleAuthProvider();
            setLoader(true);
            return signInWithPopup(auth, googleProvider);
        }
        else if (arg == 'gitHub') {
            const gitHubProvider = new GithubAuthProvider();
            setLoader(true);
            return signInWithPopup(auth, gitHubProvider);
        }
    }

    // Sign Out
    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }

    // Get User information
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            if (currentUser) {
                setUser(currentUser);
                setLoader(false);
            }
            setLoader(false); // Set loader to false after authentication state is determined
        });
        return () => {
            unSubscribe();
        }
    }, []);


    // console.log(user);


    // Theme

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            setTheme('light');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const authInfo = {
        user,
        loader,
        register,
        namePhotoUrl,
        logIn,
        logInWithMedia,
        logOut,
        theme,
        toggleTheme
    }
    return (
        <CreateContext.Provider value={authInfo}>
            <div className={theme}>
                {children}
            </div>
        </CreateContext.Provider>
    );
};

export default AuthProvider;