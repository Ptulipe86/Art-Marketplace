import React from 'react';
import ReactDOM from 'react-dom';
import './sass/custom.scss'
import App from './components/App';
import {MainContextProvider} from "./components/context/MainContext";


ReactDOM.render(
  <React.StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>    
  </React.StrictMode>,
  document.getElementById("root")
);
