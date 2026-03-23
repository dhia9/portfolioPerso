import { RevealOnScroll } from "../RevealOnScroll";

export const Skills = ({ lang }) => {
  const t = {
    en: {
      title: "Project-Based Skills",
      description: "Skills extracted from featured project work, grouped by technical area.",
      sections: [
        { title: "Frontend", items: ["React", "HTML", "CSS", "Material UI", "Tailwind CSS", "Bootstrap", "EJS"] },
        { title: "Backend", items: ["Node.js", "Express", "Python", "API REST", "MVC", "Passport.js"] },
        { title: "Data & Storage", items: ["MongoDB", "Mongoose", "PostgreSQL", "localStorage", "IndexedDB"] },
        { title: "DevOps & Tools", items: ["Vite", "Git", "SWR", "Dexie.js", "Unit Testing"] },
      ],
      details:
        "Each module below reflects the architecture and technology choices used in your project portfolio. When viewing in French, labels are localized accordingly.",
    },
    fr: {
      title: "Compétences Issues des Projets",
      description: "Compétences extraites des projets présentés, regroupées par domaine technique.",
      sections: [
        { title: "Frontend", items: ["React", "HTML", "CSS", "Material UI", "Tailwind CSS", "Bootstrap", "EJS"] },
        { title: "Backend", items: ["Node.js", "Express", "Python", "API REST", "MVC", "Passport.js"] },
        { title: "Données & Stockage", items: ["MongoDB", "Mongoose", "PostgreSQL", "localStorage", "IndexedDB"] },
        { title: "Outils & DevOps", items: ["Vite", "Git", "SWR", "Dexie.js", "Tests unitaires"] },
      ],
      details:
        "Chaque module ci-dessous reflète l'architecture et les choix technologiques utilisés dans le portfolio. En français, les libellés sont localisés.",
    },
  };

  return (
    <section id="skills" className="section-root flex items-center justify-center">
      <RevealOnScroll>
        <div className="section-inner">
          <h2 className="section-heading text-center mb-6">{t[lang].title}</h2>
          <p className="text-muted text-center mb-8">{t[lang].description}</p>
          <p className="text-gray-400 text-center mb-8">{t[lang].details}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t[lang].sections.map((section) => (
              <div key={section.title} className="card glass-panel p-5">
                <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <span key={`${section.title}-${item}`} className="badge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
