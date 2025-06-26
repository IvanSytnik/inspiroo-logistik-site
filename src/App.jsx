import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Company } from "./components/Company";
import { Products } from "./components/Products";
import { Gallery } from "./components/Gallery";
import { Certifications } from "./components/Certifications";
import { Delivery } from "./components/Delivery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { translations } from "./data/translations";

export default function App() {
  const [language, setLanguage] = useState("ua");

  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <Navbar language={language} setLanguage={setLanguage} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero language={language} />
              <About language={language} />
              <Company language={language} />
              <Products language={language} />
              <Gallery language={language} />
              <Certifications language={language} />
              <Delivery language={language} />
              <Contact language={language} />
              <Footer language={language} />
            </>
          }
        />
        {/* Остальные маршруты остаются без изменений */}
      </Routes>
    </div>
  );
}