import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Company } from './components/Company';
import { Products } from './components/Products';
import { Gallery } from './components/Gallery';
import { Certifications } from './components/Certifications';
import { Delivery } from './components/Delivery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';
import './index.css';

// Простая граница ошибок
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Произошла ошибка. Пожалуйста, перезагрузите страницу.</h1>;
    }
    return this.props.children;
  }
}

export default function App() {
  const [language, setLanguage] = useState('ua');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    console.log('Language changed to:', language);
  }, [language]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7F6F2] to-[#E5E4E2]">
      <Navbar language={language} setLanguage={setLanguage} isScrolled={scrollY > 50} />
      <ErrorBoundary>
        <Routes>
          <Route
            key={language}
            path="/"
            element={
              <>
                <section id="hero"><Hero language={language} /></section>
                <section id="about"><About language={language} /></section>
                <section id="experience"><Experience language={language} /></section>
                <section id="company"><Company language={language} /></section>
                <section id="products"><Products language={language} /></section>
                <section id="gallery"><Gallery language={language} /></section>
                <section id="certifications"><Certifications language={language} /></section>
                <section id="delivery"><Delivery language={language} /></section>
                <section id="contact"><Contact language={language} /></section>
                <Footer language={language} />
              </>
            }
          />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}