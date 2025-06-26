import { translations } from '../data/translations';

export const Footer = ({ language }) => {
  const t = translations[language].footer || { text: 'Доставка по всей Европе' }; // Значение по умолчанию

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logos">
          <img src="https://picsum.photos/50?random=1" alt="EPAL" />
          <img src="https://picsum.photos/50?random=2" alt="EUR" />
          <img src="https://picsum.photos/50?random=3" alt="UIC" />
        </div>
        <div className="footer-map">
          <img src="https://picsum.photos/600x200?random=4" alt="Map" />
        </div>
        <p className="footer-text">{t.text}</p>
      </div>
    </footer>
  );
};