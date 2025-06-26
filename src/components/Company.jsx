
import {translations} from '../data/translations'
export const Company = ({ language }) => {
  const t = translations[language].company;
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="orange-dots text-sm text-center mb-2">{language === 'ua' ? 'Компанія' : language === 'de' ? 'Unternehmen' : 'Company'}</div>
        <h2 className="text-2xl sm:text-3xl font-bold text-center uppercase orange-underline mb-8">{t.title}</h2>
        <p className="mb-4 text-sm sm:text-base">{t.text}</p>
        <p className="mb-4 text-sm sm:text-base">{t.partners}</p>
        <h3 className="text-lg sm:text-xl font-semibold mb-4 orange-underline">{language === 'ua' ? 'Ми гарантуємо:' : language === 'de' ? 'Wir garantieren:' : 'We guarantee:'}</h3>
        <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
          {t.guarantees.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="font-bold text-sm sm:text-base">{t.closing}</p>
      </div>
    </section>
  );
};