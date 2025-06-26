import { translations } from '../data/translations';

export const About = ({ language }) => {
  const t = translations[language].about;

  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <div className="dots"></div>
          <h2>{t.title}</h2>
        </div>
        <div className="about-content">
          <div className="about-image">
           <img src="/src/assets/screen_1.png" alt="Warehouse" className="object-cover" />
          </div>
          <div className="about-text">
            <h3>{t.subtitle}</h3>
            <p>{t.intro}</p>
          </div>
        </div>
      </div>
    </section>
  );
};