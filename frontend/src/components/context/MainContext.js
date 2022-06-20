import { useState, createContext } from "react";
import useLocalStorage from "../Utilities/useLocalStorage";

export const MainContext = createContext();

export const MainContextProvider = ({children}) => {
  const [user, setUser] = useState({ 
    givenName:"",
    surname:"",
    email:"",
    artist: false,
    purchaser: false,
    password:"",
    confirmPass: "",
    avatarUrl: "",
    bio: "",
    collection: []
  });
  
  const [currentUser, setCurrentUser] = useLocalStorage("Current user:", null);

  return(
    <MainContext.Provider value={{
      user, setUser,
      currentUser, setCurrentUser,      
    }}>
      {children}
    </MainContext.Provider>
  )
};

