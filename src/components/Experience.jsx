import { translations } from '../data/translations';

export const Experience = ({ language }) => {
  const t = translations[language].experience;

  return (
    <section className="section experience">
      <div className="container">
        <div className="section-title">
          <h2>{t.title}</h2>
        </div>
        <div className="section-content experience-grid">
          <div className="experience-item">
            <div className="experience-image">
              <img src="/src/assets/experience-1.jpg" alt="Experience 1" />
            </div>
            <div className="experience-text">
              <h3>{t.years.title}</h3>
              <p>{t.years.description}</p>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-image">
              <img src="/src/assets/experience-2.webp" alt="Quality 1" />
            </div>
            <div className="experience-text">
              <h3>{t.quality.title}</h3>
              <p>{t.quality.description}</p>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-image">
              <img src="/src/assets/experience-3.webp" alt="Delivery 1" />
            </div>
            <div className="experience-text">
              <h3>{t.delivery.title}</h3>
              <p>{t.delivery.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};