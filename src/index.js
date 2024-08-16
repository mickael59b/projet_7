import React from 'react';
import ReactDOM from 'react-dom/client'; // Utilisation de createRoot pour React 18+
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/style.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import DetailLogement from './pages/DetailLogement'; // Assurez-vous du chemin correct
import About from './pages/About'; // Correction du nom du composant

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<DetailLogement />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

