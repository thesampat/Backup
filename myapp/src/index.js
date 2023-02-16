import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routing } from './MyNotes/Components/serverdata';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <BrowserRouter>
    <React.Fragment>
      <App/>
    </React.Fragment>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
