import { translations } from '../data/translations';

export const Company = ({ language }) => {
  const t = translations[language].company;

  return (
    <section className="section company">
      <div className="container">
        <div className="section-title">
          <h2>{t.title}</h2>
        </div>
        <div className="section-content company-content">
          <div className="company-overview">
            <div className="company-image">
              <img src="/src/assets/company-photo.jpg" alt="Company Overview" />
            </div>
            <div className="company-text-container">
              <p className="company-text">{t.text}</p>
              <p className="company-partners">{t.partners}</p>
            </div>
          </div>
          <div className="company-guarantees">
            <h3>{language === 'ua' ? 'Ми гарантуємо:' : language === 'de' ? 'Wir garantieren:' : 'We guarantee:'}</h3>
            <div className="guarantee-cards">
              {t.guarantees.map((item, index) => (
                <div className="guarantee-card" key={index}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="company-closing">{t.closing}</p>
        </div>
      </div>
    </section>
  );
};