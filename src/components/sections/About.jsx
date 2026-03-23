import { RevealOnScroll } from "../RevealOnScroll";

export const About = ({ lang }) => {
  const t = {
    en: {
      title: "About Me",
      intro: "Passionate developer with expertise in building scalable web applications and creating meaningful innovative solutions.",
      frontend: "Frontend",
      backend: "Backend",
      education: "Education",
      workExp: "Work Experience",
      educationList: [
        "Integrated Preparatory Cycle (second year) - INSA Lyon",
        "Relevant Coursework: Data Structures, Web Development, GUI OOP, Statistics, Machine Learning - first year obtained with high honors",
        "French General Baccalaureate – Mathematics & Physics Specialization - Self-taught candidate Graduated with High Honors",
        "Baccalaureate – Mathematics Specialization (Lycée Pilote) - Result: Graduated with Highest Honors"
      ],
      workText: "Warehouse Logistics & Management Intern | SMG: Introductory Corporate Internship with hands-on experience in supply chain operations and inventory management.",
    },
    fr: {
      title: "À propos",
      intro: "Développeur passionné spécialisé dans la création d'applications web évolutives et de solutions innovantes à forte valeur ajoutée.",
      frontend: "Frontend",
      backend: "Backend",
      education: "Formation",
      workExp: "Expérience Professionnelle",
      educationList: [
        "Cycle préparatoire intégré (deuxième année) - INSA Lyon",
        "Cours pertinents : Structures de données, développement Web, GUI OOP, Statistiques, apprentissage automatique - première année obtenue avec mention très bien",
        "Baccalauréat général français – Spécialité Mathématiques & Physique - candidat libre diplômé mention très bien",
        "Baccalauréat – spécialité Mathématiques (Lycée Pilote) - Résultat : Diplômé mention très très bien"
      ],
      workText: "Stagiaire Logistique & Gestion d'entrepôt | SMG : stage en entreprise avec expérience pratique des opérations de la chaîne d'approvisionnement et de la gestion des stocks.",
    },
  };

  const frontendSkills = ["React", "Bootstrap", "TailwindCSS", "HTML", "CSS", "ejs (Embedded js)", "Material UI"];
  const backendSkills = ["Node.js", "Python", "Express", "MongoDB", "PostgreSQL", "API REST", "SQL", "MVC", "Typescript", "JavaScript (ES6)"];

  return (
    <section id="about" className="section-root flex items-center justify-center">
      <RevealOnScroll>
        <div className="section-inner">
          <h2 className="section-heading text-center mb-8">{t[lang].title}</h2>

          <div className="card glass-panel p-8 mb-8">
            <p className="text-muted mb-6">{t[lang].intro}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card glass-panel p-6">
                <h3 className="text-xl font-bold mb-4">{t[lang].frontend}</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card glass-panel p-6">
                <h3 className="text-xl font-bold mb-4">{t[lang].backend}</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 {t[lang].education}</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {t[lang].educationList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 {t[lang].workExp}</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Warehouse Logistics & Management Intern | SMG
                  </h4>
                  <p>
                    {t[lang].workText}<br/>

                    Observed and assisted in daily logistics workflows, warehouse organization, and stock control systems.
                  </p>
                </div>

                {/* <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at DEF Startups (2019){" "}
                  </h4>
                  <p>
                    Assisted in building front-end components and integration
                    REST APIs
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
