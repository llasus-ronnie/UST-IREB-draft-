import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App.jsx";

ReactDOM.render(
  <GoogleOAuthProvider clientId="1096253239259-ppprcg1pk7j1f6ks5aob3o9j0h2q8ona.apps.googleusercontent.com">
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById('root')
);

