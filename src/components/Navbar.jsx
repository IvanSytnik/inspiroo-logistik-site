import { useState } from 'react';
import { translations } from '../data/translations';

export const Navbar = ({ language, setLanguage, isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[language].nav;

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">InspirooLogistik</div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={() => scrollToSection('hero')}>{t.home}</a>
          <a href="#about" onClick={() => scrollToSection('about')}>{t.about}</a>
          <a href="#products" onClick={() => scrollToSection('products')}>{t.products}</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>{t.contact}</a>
        </div>
        <div className="nav-contact">
          <a href="tel:+491758142125">+49 175 814 21 25</a>
          <a href="mailto:info@inspiroologistik.com">info@inspiroologistik.com</a>
          <div className="language-switch">
            <button className={language === 'ua' ? 'active' : ''} onClick={() => changeLanguage('ua')}>UA</button>
            <button className={language === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')}>EN</button>
            <button className={language === 'de' ? 'active' : ''} onClick={() => changeLanguage('de')}>DE</button>
          </div>
        </div>
        <button
          className={`burger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {isOpen && (
        <div className="burger-menu open">
          <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Close menu">✖</button>
          <div className="burger-menu-content">
            <nav className="burger-nav">
              <a href="#hero" onClick={() => scrollToSection('hero')}>{t.home}</a>
              <a href="#about" onClick={() => scrollToSection('about')}>{t.about}</a>
              <a href="#products" onClick={() => scrollToSection('products')}>{t.products}</a>
              <a href="#contact" onClick={() => scrollToSection('contact')}>{t.contact}</a>
            </nav>
            <div className="language-switch-container">
              <div className="language-switch burger">
                <button className={language === 'ua' ? 'active' : ''} onClick={() => changeLanguage('ua')}>UA</button>
                <button className={language === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')}>EN</button>
                <button className={language === 'de' ? 'active' : ''} onClick={() => changeLanguage('de')}>DE</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};