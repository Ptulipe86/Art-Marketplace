import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import GlobalStyles from "./Utilities/GlobalStyles";
import Homepage from "./Routes/Homepage";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Artist from "./Routes/Artist";
import Purchaser from "./Routes/Purchaser";
import ViewArt from "./Routes/ViewArt";
import RegistrationForm from "./Forms/RegistrationForm";
import SignIn from "./Forms/SignIn";
import Missing from "./Utilities/Missing";
import { MainContext } from "./context/MainContext";

const App = () => {
  const {currentUser} = useContext(MainContext)
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Main>
        {currentUser !== null && (
          <>
            <Sidebar />
          </>
        )}        
        <Routes>
          {/* public routes */}
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/register" element={<RegistrationForm />}/>
          <Route exact path="/signIn" element={<SignIn />}/>
          <Route exact path="/view-art" element={<ViewArt />}/>
          
          {/* protected artist*/}
          {currentUser !== null && (
            <Route exact path="/artist/:id" element={<Artist />}/>
          )}

          {/* protected buyer*/}
          {currentUser !== null && (
            <Route exact path="/purchaser/:id" element={<Purchaser />}/>
          )} 
          

          {/* catch all */}
          {currentUser === null && (
            <Route path="*" element={<Missing />}/>
          )}
                    
        </Routes>      
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 90vh;
`;

export default App;
