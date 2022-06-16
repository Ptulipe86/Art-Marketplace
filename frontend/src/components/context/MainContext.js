import { useContext, useState, createContext } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({children}) => {
  const [user, setUser] = useState({ 
    givenName:"",
    surname:"",
    email:"",
    artist: false,
    purchaser: false,
    password:"",
    confirmPass: ""
  });






  return(
    <MainContext.Provider value={{
      user, setUser,
    }}>
      {children}
    </MainContext.Provider>
  )
};

