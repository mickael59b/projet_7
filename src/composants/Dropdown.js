import React, { useState } from 'react';
import OpenIcon from '../assets/images/open_icon.png'; // Image pour l'état ouvert
import CloseIcon from '../assets/images/close_icon.png'; // Image pour l'état fermé

const Dropdown = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
                {title}
                <img
                    src={isOpen ? OpenIcon : CloseIcon}
                    alt={isOpen ? 'Open' : 'Close'}
                    className="dropdown-icon"
                />
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Dropdown;

