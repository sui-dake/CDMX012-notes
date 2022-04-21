// import { createContext, 
//     useContext, 
//     useEffect, 
//     useState } 
//     from "react";
// import { createUserWithEmailAndPassword,
//         signInWithEmailAndPassword,
//         signOut,
//         onAuthStateChanged,
//         GoogleAuthProvider,
//         signInWithPopup,
//         sendPasswordResetEmail,
//       } from "firebase/auth";
// import { auth } from "../firebaseApp";

// const authContext = createContext();

// export const useAuth = () => {
//     const context = useContext(authContext);
//     //isMember ? '$2.00' : '$10.00');
//     if(!context) throw new Error('There is no Auth provider'); 
//     return context;
// };

// export function AuthProvider ({children}) {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const signup = (email, pass) => {
//         return createUserWithEmailAndPassword(auth, email, pass);
//     }

//     const login = (email, pass) => signInWithEmailAndPassword(auth, email, pass);

//     const googleLogin = () => {
//         const googleProvider = new GoogleAuthProvider();
//         return signInWithPopup(auth, googleProvider);
//     }

//     const logout = () => signOut(auth);

//     useEffect(() => {
//         const unsuscribe = onAuthStateChanged(auth, (currentUser)=>{
//             console.log({ currentUser });
//             setUser(currentUser);
//             setLoading(false);
//         });
//         return () => unsuscribe();
//     }, []);
//     return (
//         <authContext.Provider
//          value={{
//              signup,
//              login,
//              user,
//              logout,
//              loading,
//              googleLogin,
//          }}
//         >
//             {children}
//          </authContext.Provider>
//     );
// }
