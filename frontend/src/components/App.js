import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import GlobalStyles from "./utilities/GlobalStyles";
import Homepage from "./routes/Homepage";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Artist from "./routes/Artist";
import Purchaser from "./routes/Purchaser";
import ViewArt from "./routes/ViewArt";
import RegistrationForm from "./forms/RegistrationForm";
import SignIn from "./forms/SignIn";
import Missing from "./utilities/Missing";
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
          {currentUser !== null && (
            <Route exact path="/view-art" element={<ViewArt />}/>
          )}

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
  height: 100%;
`;

export default App;
