import { createContext, useEffect, useState } from 'react'
import  { auth, firebase } from '../services/firebase';

const AuthContext = createContext();

function AuthProvider({children}) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        const { displayName, photoURL, uid} = user
    
        if( !displayName || !photoURL) {
          throw new Error('Missing Information from Google Account');
        }
    
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const [user, setUser] = useState();

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    const result = await auth.signInWithPopup(provider);
  
    if(result.user) {
      const { displayName, photoURL, uid} = result.user
  
      if( !displayName || !photoURL) {
        throw new Error('Missing Information from Google Account');
      }
  
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  return (
    <AuthContext.Provider value={{ setUser, user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider}