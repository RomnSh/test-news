import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import {store} from "./reducer/index"
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID 
// const redirectUri = process.env.REACT_APP_AUTH0_CLIENT_ID


root.render(
  
    <Provider store ={store}>
      <Router>
        <Auth0Provider 
        domain={domain}
        clientId={clientID}
        redirectUri={window.location.origin}
        // redirectUri={redirectUri}
        >
          <App />
        </Auth0Provider>
      </Router>
    </Provider>
  
  
  
    

);


