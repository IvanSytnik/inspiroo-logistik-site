import { translations } from '../data/translations';

export const Products = ({ language }) => {
  const t = translations[language].products;

  return (
    <section className="section products">
      <div className="container">
        <div className="section-title">
          <h2>{t.title}</h2>
        </div>
        <div className="section-content products-grid">
          {t.items.map((item, index) => (
            <div key={index} className="product-card">
              <img src={`/src/assets/product-${index + 1}.png`} alt={item.name} /> {/* Локальные изображения */}
              <h3>{item.name}</h3>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};