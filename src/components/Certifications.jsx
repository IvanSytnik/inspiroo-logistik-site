import { translations } from '../data/translations';

export const Certifications = ({ language }) => {
  const t = translations[language].certifications;

  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>{t.title}</h2>
        </div>
        <div className="section-content certifications-grid">
          {t.items.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};