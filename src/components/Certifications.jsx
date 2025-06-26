import { translations } from "../data/translations";

export const Certifications = ({ language }) => {
  const t = translations[language].certifications;

  return (
    <section className="py-16 bg-[#F7F6F2]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">{t.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};