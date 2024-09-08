import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';
import AppRoutes from './composants/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
