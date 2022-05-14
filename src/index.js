import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import AnswersRouteService from './services/answers/AnswersRouteService';

const answersRouteService = new AnswersRouteService("answers");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App answersRouteService={answersRouteService} />
  </React.StrictMode>
);

