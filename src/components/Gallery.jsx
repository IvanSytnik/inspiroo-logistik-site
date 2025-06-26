import {translations} from '../data/translations'

export const Gallery = ({ language }) => {
  const t = translations[language].gallery;
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="orange-dots text-sm text-center mb-2">{language === 'ua' ? 'Галерея' : language === 'de' ? 'Galerie' : 'Gallery'}</div>
        <h2 className="text-2xl sm:text-3xl font-bold text-center uppercase orange-underline mb-8">{t.title}</h2>
        <p className="text-center mb-8 text-sm sm:text-base">{t.text}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <img
              key={i}
              src={`/src/assets/screen_2.png`}
              alt={`Gallery ${i}`}
              className="w-full h-auto rounded"
            />
          ))}
        </div>
      </div>
    </section>
  );
};