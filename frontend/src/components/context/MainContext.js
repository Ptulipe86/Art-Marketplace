import { useState, createContext } from "react";
import useLocalStorage from "../utilities/useLocalStorage";

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
  const [status, setStatus] = useState("loading");
  const [addToCart, setAddToCart] = useState(0);

  return(
    <MainContext.Provider value={{
      user, setUser,
      currentUser, setCurrentUser,
      status, setStatus,
      addToCart, setAddToCart      
    }}>
      {children}
    </MainContext.Provider>
  )
};

