import { useEffect, useState } from "react"
import { createContext } from "react"
import { userObserver } from "../helpers/firebase"


export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

    const [currentUser,setCurrentUser]=useState(false)
    const [show, setShow] = useState(false)

    useEffect(() => {
      userObserver(setCurrentUser)
    }, [])
    

  return (
    <AuthContext.Provider value={{currentUser, setShow, show}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider