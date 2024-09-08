import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const location = useLocation(); // Utilisation de useLocation pour obtenir le chemin actuel

    return (
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
                {/* Ajout d'autres liens si nécessaire */}
            </ul>
        </nav>
    );
}

export default Nav;
