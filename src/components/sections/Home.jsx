import { RevealOnScroll } from "../RevealOnScroll";
// import monCv from '../../assets/Dhia-Somai_cv_.pdf';
import monCv from "../../assets/Dhia-Somai_cv_.pdf";

export const Home = ({ lang }) => {
  const t = {
    en: {
      title: "Hi, I'm Dhia Somai",
      intro: "Full-Stack Developer | INSA Lyon | Thales STEM for All Laureate",
      description:
        "Second-year engineering student at France’s top-ranked post-bac school, seeking a 3-year apprenticeship starting next year. Passionate about Full-Stack development, with a strong interest in Data Science and Data Engineering roles.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      downloadCV: "Download CV",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    fr: {
      title: "Bonjour, je suis Dhia Somai",
      intro: "Développeur Full-Stack | INSA Lyon | Lauréat Thales STEM for All",
      description:
        "Étudiant en deuxième année d'ingénierie à l'école post-bac la mieux classée en France, recherche un contrat d'apprentissage de 3 ans à partir de l'année prochaine. Passionné par le développement Full-Stack, avec un fort intérêt pour la Data Science et l'Ingénierie des Données.",
      viewProjects: "Voir les projets",
      contactMe: "Contactez-moi",
      downloadCV: "Télécharger CV",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  };

  return (
    <section
      id="home"
      className="section-root flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="section-inner text-center z-10">
          <h1 className="section-heading tracking-tight">{t[lang].title}</h1>

          <p className="text-muted text-lg mb-8 max-w-3xl mx-auto">
            {t[lang].intro}
            <br />
            <br />
            {t[lang].description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="btn-primary">
              {t[lang].viewProjects}
            </a>

            <a href="#contact" className="btn-secondary">
              {t[lang].contactMe}
            </a>

            <a href={monCv} download="CV_Dhia_Somai.pdf" className="btn-secondary">
              {t[lang].downloadCV}
            </a>
            

          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/dhia-somai-/"
              className="btn-secondary"
            >
              {t[lang].linkedin}
            </a>
            <a
              target="_blank"
              href="https://github.com/dhia9"
              className="btn-secondary"
            >
              {t[lang].github}
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
