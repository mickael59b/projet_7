import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const location = useLocation(); 

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
            </ul>
        </nav>
    );
}

export default Nav;
