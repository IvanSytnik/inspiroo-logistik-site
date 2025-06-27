import { translations } from '../data/translations';

export const Gallery = ({ language }) => {
  const t = translations[language].gallery;
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>{t.title}</h2>
        </div>
        <div className="section-content gallery-grid">
          {[1, 2, 3].map((i) => (
            <img
              key={i}
              src={`/src/assets/gallery_${i}.jpg`} /* Локальные изображения */
              alt={`Gallery ${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};