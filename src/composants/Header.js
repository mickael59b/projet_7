import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import des composants nécessaires
import logo from '../assets/images/logo.png';

function Header() {
    const location = useLocation(); // Utilisation de useLocation pour obtenir le chemin actuel
    const [activeLink, setActiveLink] = useState(location.pathname);

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <ul className='menu'>
                    <li>
                        <Link
                            to="/"
                            className={location.pathname === "/" ? "active" : ""}
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={location.pathname === "/about" ? "active" : ""}
                        >
                            A Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
