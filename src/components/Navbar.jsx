import { Link } from 'react-router-dom';
import { useState } from 'react';
import { translations } from '../data/translations';

export const Navbar = ({ language, setLanguage }) => {
  const t = translations[language].nav;
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsOpen(false); // Закрываем меню при смене языка
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">InspirooLogistik</div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>{t.home}</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>{t.about}</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>{t.products}</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>{t.contact}</Link>
        </div>
        <div className="nav-contact">
          <a href="tel:+491758142125">+49 175 814 21 25</a>
          <a href="mailto:info@inspiroologistik.com">info@inspiroologistik.com</a>
          <div className="language-switch">
            <button className={language === 'ua' ? 'active' : ''} onClick={() => changeLanguage('ua')}>UA</button>
            <button className={language === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')}>EN</button>
            <button className={language === 'de' ? 'active' : ''} onClick={() => changeLanguage('de')}>DE</button>
          </div>
          <button className="burger" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};