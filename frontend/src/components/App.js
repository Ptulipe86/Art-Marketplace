import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./Utilities/GlobalStyles";
import Homepage from "./Routes/Homepage";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Artist from "./Routes/Artist";
import Purchaser from "./Routes/Purchaser";
import Curator from "./Routes/Curator";
import ViewArt from "./Routes/ViewArt";

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
          <Route exact path="/artist">
            <Artist />
          </Route>
          <Route exact path="/purchaser">
            <Purchaser />
          </Route>
          <Route exact path="/curator">
            <Curator />
          </Route>
          <Route exact path="/view-art">
            <ViewArt />
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
`;

export default App;
