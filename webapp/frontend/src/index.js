import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AuthContextProvider} from "./context/AuthContext";
import {DogContextProvider} from "./context/DogContext";
import {CatContextProvider} from "./context/CatContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AuthContextProvider>
          <DogContextProvider>
              <CatContextProvider>
                 <App />
              </CatContextProvider>
          </DogContextProvider>
      </AuthContextProvider>
  </React.StrictMode>
);

