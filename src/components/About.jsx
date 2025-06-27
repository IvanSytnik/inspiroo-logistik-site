import { translations } from '../data/translations';

export const About = ({ language }) => {
  const t = translations[language].about;

  return (
    <section className="section about">
      <div className="container">
        <div className="section-title">
          <h2>{t.title}</h2>
        </div>
        <div className="section-content about-content">
          <div className="about-image">
            <img src="/src/assets/2025-06-27 01.57.28.jpg" alt="Warehouse" />
          </div>
          <div className="about-text">
            <h3>{t.intro}</h3>
            <p>{t.description}</p> {/* Добавляем описание для полноты текста */}
          </div>
        </div>
      </div>
    </section>
  );
};