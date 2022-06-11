import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./Utilities/GlobalStyles";
import Homepage from "./Routes/Homepage";
import Header from "./Header";
import Footer from "./Footer";


const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>      
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
