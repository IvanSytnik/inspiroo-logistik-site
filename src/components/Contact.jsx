
import {translations} from '../data/translations'
export const Contact = ({ language }) => {
  const t = translations[language].contact;
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="orange-dots text-sm text-center mb-2">{language === 'ua' ? 'Контакти' : language === 'de' ? 'Kontakt' : 'Contact'}</div>
        <h2 className="text-2xl sm:text-3xl font-bold text-center uppercase orange-underline mb-8">{t.title}</h2>
        <p className="text-center mb-8 text-sm sm:text-base">{t.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">{t.company}</h3>
            <p className="text-sm sm:text-base"><strong>{language === 'ua' ? 'Адреса:' : language === 'de' ? 'Adresse:' : 'Address:'}</strong> {t.address}</p>
            <p className="text-sm sm:text-base"><strong>{language === 'ua' ? 'Телефон:' : language === 'de' ? 'Telefon:' : 'Phone:'}</strong> <a href="tel:+491758142125">{t.phone}</a></p>
            <p className="text-sm sm:text-base"><strong>Email:</strong> <a href={`mailto:${t.email}`}>{t.email}</a></p>
            <p className="text-sm sm:text-base"><strong>{language === 'ua' ? 'Графік роботи:' : language === 'de' ? 'Öffnungszeiten:' : 'Working Hours:'}</strong> {t.hours}</p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.123456789!2d8.735123!3d48.075432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a1f1234567890%3A0x1234567890abcdef!2sCharlottenstra%C3%9Fe+16%2C+78549+Spaichingen%2C+Germany!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">{language === 'ua' ? 'Зв’язатися з нами' : language === 'de' ? 'Kontaktieren Sie uns' : 'Get in Touch'}</h3>
            <div className="space-y-4">
              <input type="text" placeholder={language === 'ua' ? 'Ім’я' : language === 'de' ? 'Name' : 'Name'} className="w-full p-2 border rounded text-sm sm:text-base" />
              <input type="email" placeholder="Email" className="w-full p-2 border rounded text-sm sm:text-base" />
              <textarea placeholder={language === 'ua' ? 'Повідомлення' : language === 'de' ? 'Nachricht' : 'Message'} className="w-full p-2 border rounded h-32 text-sm sm:text-base"></textarea>
              <button className="bg-[#F5A623] text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-[#e69520] text-sm sm:text-base">
                {language === 'ua' ? 'Відправити' : language === 'de' ? 'Senden' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};