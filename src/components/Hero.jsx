import { translations } from '../data/translations';

export const Hero = ({ language }) => {
  const t = translations[language].hero;

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      console.log('Scrolled to contact section');
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{t.title}</h1>
          <p className="hero-subtitle">{t.description}</p>
          <p className="hero-quote">{t.quote}</p>
          <a href="#contact" onClick={scrollToContact} className="hero-cta">{t.cta}</a>
        </div>
      </div>
    </section>
  );
};