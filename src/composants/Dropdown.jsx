import React, { useState } from 'react';
import CloseIcon from '../assets/images/close_icon.png'; // Icône pour l'état fermé
import OpenIcon from '../assets/images/open_icon.png'; // Icône pour l'état ouvert

const Dropdown = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false); // Menu fermé par défaut

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
                {title}
                <img
                    src={isOpen ? OpenIcon : CloseIcon}
                    alt={isOpen ? "Open Icon" : "Close Icon"}
                    className={`dropdown-icon ${isOpen ? 'dropdown-icon-open' : 'dropdown-icon-close'}`}
                />
            </button>
            <div className={`dropdown-content ${isOpen ? 'open' : 'close'}`}>
                {children}
            </div>
        </div>
    );
};

export default Dropdown;

