import { translations } from '../data/translations';

export const Delivery = ({ language }) => {
  const t = translations[language].delivery;

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      console.log('Scrolled to contact section');
    }
  };

  return (
    <section className="section delivery" id="delivery">
      <div className="container">
        <div className="section-title">
          <h2>{t.title}</h2>
        </div>
        <div className="section-content delivery-content">
          <div className="delivery-map">
            <img src="/src/assets/EU27-2020_European_Union_map.svg.png" alt="Europe Delivery Map" />
          </div>
          <div className="delivery-details">
            <p className="delivery-text">{t.text}</p>
            <div className="delivery-countries-grid">
              {t.countries.map((country, index) => (
                <div className="country-card" key={index}>
                  <span>{country}</span>
                </div>
              ))}
            </div>
            <ul className="delivery-features">
              {t.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <a href="#contact" onClick={scrollToContact} className="button delivery-cta">{t.cta}</a>
          </div>
        </div>
      </div>
    </section>
  );
};