import { translations } from '../data/translations';

export const Hero = ({ language }) => {
  const t = translations[language].hero;

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="dots text-sm mb-4">{language === 'ua' ? 'Надійність' : 'Reliability'}</div>
          <h1>{t.title}</h1>
          <p>{t.description}</p>
          <div className="accent-block">
            <p>{t.quote}</p>
          </div>
        </div>
        <div className="hero-image">
          <img src="/src/assets/screen_2.png" alt="Pallets" className="object-cover" />
        </div>
      </div>
    </section>
  );
};