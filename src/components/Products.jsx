import { Link } from 'react-router-dom';
import { translations } from '../data/translations';

export const Products = ({ language }) => {
  const t = translations[language].products;

  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <div className="dots"></div>
          <h2>{t.title}</h2>
        </div>
        <div className="products-grid">
          {t.items.map((item, index) => (
            <div key={index} className="product-card">
              <img src={`https://via.placeholder.com/200x150?text=${item.name}`} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};