import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Main>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/view-art">
            <ViewArt />
          </Route>
          <Route exact path="/artist">
            <Artist />
          </Route>
          <Route exact path="/purchaser">
            <Purchaser />
          </Route>
          {/* <Route exact path="/curator">
            <Curator />
          </Route> */}
          <Route exact path="/register">
            <RegistrationForm />
          </Route>
          <Route exact path="/signIn">
            <SignIn />
          </Route>
        </Switch>      
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
