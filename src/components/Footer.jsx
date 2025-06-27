import { Link } from 'react-router-dom'; // Добавляем для ссылки, если нужно
import { translations } from '../data/translations';

export const Footer = ({ language }) => {
  const t = translations[language].footer || { text: 'Delivery across Europe' };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logos">
            <img src="/src/assets/epal.png" alt="Combined Logos (EPAL, EUR, UIC)" />
          </div>
          <div className="footer-info">
            <p className="footer-text">{t.text}</p>
            <div className="footer-map">
              <img src="/src/assets/EU27-2020_European_Union_map.svg.png" alt="Map" />
            </div>
          </div>
          <div className="footer-links">
            <Link to="/privacy" className="footer-link">{language === 'ua' ? 'Політика конфіденційності' : language === 'de' ? 'Datenschutz' : 'Privacy Policy'}</Link>
            <Link to="/terms" className="footer-link">{language === 'ua' ? 'Умови використання' : language === 'de' ? 'Nutzungsbedingungen' : 'Terms of Use'}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};