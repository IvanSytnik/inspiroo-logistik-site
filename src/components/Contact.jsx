import { useState } from 'react';
import { translations } from '../data/translations';

export const Contact = ({ language }) => {
  const t = translations[language].contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interests: [],
    notifications: '',
    consent: false,
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'interests') {
      setFormData((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((item) => item !== value),
      }));
    } else if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      setStatus(t.errorConsent);
      return;
    }
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus(t.errorRequired);
      return;
    }
    setStatus(t.submitting);
    try {
      const response = await fetch('https://formspree.io/f/xovwyjpp', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          interests: formData.interests.join(', '),
          notifications: formData.notifications,
        }),
      });
      if (response.ok) {
        setStatus(t.success);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          interests: [],
          notifications: '',
          consent: false,
        });
      } else {
        setStatus(t.error);
      }
    } catch (error) {
      setStatus(t.error);
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>{t.title}</h2>
        </div>
        <div className="section-content contact-content">
          <div className="contact-info">
            <h3>{t.company}</h3>
            <div className="contact-details">
              <p><strong>{language === 'ua' ? 'Адреса:' : language === 'de' ? 'Adresse:' : 'Address:'}</strong> {t.address}</p>
              <p><strong>{language === 'ua' ? 'Телефон:' : language === 'de' ? 'Telefon:' : 'Phone:'}</strong> <a href="tel:+491758142125">{t.phone}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${t.email}`}>{t.email}</a></p>
              <p><strong>{language === 'ua' ? 'Графік роботи:' : language === 'de' ? 'Öffnungszeiten:' : 'Working Hours:'}</strong> {t.hours}</p>
            </div>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.123456789!2d8.735123!3d48.075432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a1f1234567890%3A0x1234567890abcdef!2sCharlottenstra%C3%9Fe+16%2C+78549+Spaichingen%2C+Germany!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
              ></iframe>
            </div>
          </div>
          <div className="contact-form">
            <h3>{language === 'ua' ? 'Зв’язатися з нами' : language === 'de' ? 'Kontaktieren Sie uns' : 'Get in Touch'}</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder={language === 'ua' ? 'Ім’я' : language === 'de' ? 'Name' : 'Name'}
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder={language === 'ua' ? 'Номер телефону' : language === 'de' ? 'Telefonnummer' : 'Phone Number'}
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{9,}"
                title={language === 'ua' ? 'Введіть дійсний номер телефону' : language === 'de' ? 'Geben Sie eine gültige Telefonnummer ein' : 'Enter a valid phone number'}
              />
              <textarea
                name="message"
                placeholder={language === 'ua' ? 'Повідомлення' : language === 'de' ? 'Nachricht' : 'Message'}
                value={formData.message}
                onChange={handleChange}
              />
              <div className="form-question">
                <label>
                  {language === 'ua' ? 'У чому зацікавлені?' : language === 'de' ? 'Worauf interessiert?' : 'Interested in?'}
                </label>
                <div className="checkbox-group">
                  {[
                    { ua: 'EPAL', en: 'EPAL', de: 'EPAL' },
                    { ua: 'EUR-UIC', en: 'EUR-UIC', de: 'EUR-UIC' },
                    { ua: 'IPPC/HT', en: 'IPPC/HT', de: 'IPPC/HT' },
                    { ua: 'Економ', en: 'Economy', de: 'Economy' },
                    { ua: 'Надставки', en: 'Extensions', de: 'Erweiterungen' },
                    { ua: 'Брикети', en: 'Briquettes', de: 'Briketts' },
                    { ua: 'Комплект', en: 'Components', de: 'Komponenten' },
                  ].map((item, index) => (
                    <label key={index} className="checkbox-label">
                      <input
                        type="checkbox"
                        name="interests"
                        value={item[language]}
                        checked={formData.interests.includes(item[language])}
                        onChange={handleChange}
                      /> {item[language]}
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-consent">
                <label className="consent-label">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                  />
                  <span>
                    {t.consentText} <a href="#privacy" className="consent-link">{t.privacyLink}</a>
                  </span>
                </label>
              </div>
              <button type="submit" disabled={status === t.submitting}>
                {status === t.submitting ? t.submitting : language === 'ua' ? 'Відправити' : language === 'de' ? 'Senden' : 'Send'}
              </button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};