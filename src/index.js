import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";

import Api from './services/api';

const apiUrl = "http://localhost:4000/answers";
const apiService = new Api(apiUrl);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App apiService={apiService} />
  </React.StrictMode>
);

