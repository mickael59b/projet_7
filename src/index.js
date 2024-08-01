import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/style.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import DetailLogement from './pages/DetailLogement'; // Ensure the correct path and naming convention

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<DetailLogement />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
