import { Link } from 'react-router-dom';
import {translations} from '../data/translations'


export const Delivery = ({ language }) => {
  const t = translations[language].delivery;
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="orange-dots text-sm text-center mb-2">{language === 'ua' ? 'Доставка' : language === 'de' ? 'Lieferung' : 'Delivery'}</div>
        <h2 className="text-2xl sm:text-3xl font-bold text-center uppercase orange-underline mb-8">{t.title}</h2>
        <p className="text-center mb-4 text-sm sm:text-base">{t.text}</p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4">
          {t.countries.map((country, index) => (
            <span key={index} className="px-2 text-sm sm:text-base">{country}</span>
          ))}
        </div>
        <ul className="list-disc list-inside text-center mb-4 text-sm sm:text-base">
          {t.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <div className="text-center">
          <Link to="/contact" className="bg-[#F5A623] text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-[#e69520] text-sm sm:text-base">
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  );
};