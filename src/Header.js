import React from 'react';

const Header = () => {

    return (
        <header className="Header">
            <div className="Header-logo">KCAL<span>C</span></div>
            <nav>
                <input type="checkbox" className="hidden_checkbox" id="hidden_checkbox"/>
                <label htmlFor="hidden_checkbox" className="checkbox_toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <ul className="Header-nav-list">
                    <li className="Header-nav-item">Podgląd tygodnia</li>
                    <li className="Header-nav-item">Zarządzaj posiłkami</li>
                    <li className="Header-nav-item">Zarządzaj składnikami</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;