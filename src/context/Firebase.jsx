import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAslDtRyuZOMRe3BtbmCxvSbxuL7HTXRQM",
  authDomain: "reluchallenge1.firebaseapp.com",
  projectId: "reluchallenge1",
  storageBucket: "reluchallenge1.appspot.com",
  messagingSenderId: "609499553187",
  appId: "1:609499553187:web:dd07b86d383bee00aace16",
  databaseURL: "https://reluchallenge1-default-rtdb.firebaseio.com/",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseDatabase = getDatabase(firebaseApp);
const firebaseGoogle = new GoogleAuthProvider();

const FirebaseContext = createContext(null);

//custom hook
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
    
    //SignUp Function
  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  //Login Function
  const loginUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  }

  //Storing the data
  const putData = (key, data) => set(ref(firebaseDatabase, key), data);

  //signup with google
  const signupWithGoogle = () => {
    return signInWithPopup(firebaseAuth, firebaseGoogle)
  }
  
  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        putData,
        loginUserWithEmailAndPassword,
        signupWithGoogle,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
