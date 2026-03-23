import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen, lang, setLang }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const t = {
    en: { home: "Home", about: "About", projects: "Projects", skills: "Skills", contact: "Contact", lang: "FR" },
    fr: { home: "Accueil", about: "À propos", projects: "Projets", skills: "Compétences", contact: "Contact", lang: "EN" },
  };
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(6,11,28,0.78)] backdrop-blur-xl border-b border-white/15 shadow-xl">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" " }
            <span className="text-cyan-300">Dhia Somai</span>{" " }
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-slate-200 hover:text-white transition-colors font-medium"
            >
              {t[lang].home}
            </a>
            <a
              href="#about"
              className="text-slate-200 hover:text-white transition-colors font-medium"
            >
              {t[lang].about}
            </a>
            <a
              href="#projects"
              className="text-slate-200 hover:text-white transition-colors font-medium"
            >
              {t[lang].projects}
            </a>
            <a
              href="#skills"
              className="text-slate-200 hover:text-white transition-colors font-medium"
            >
              {t[lang].skills}
            </a>
            <a
              href="#contact"
              className="text-slate-200 hover:text-white transition-colors font-medium"
            >
              {t[lang].contact}
            </a>
          </div>

          <button
            onClick={() => setLang((current) => (current === "en" ? "fr" : "en"))}
            className="ml-4 px-3 py-2 rounded-lg border border-cyan-300/60 bg-slate-900/50 text-cyan-200 font-semibold hover:bg-cyan-400/10 transition"
          >
            {t[lang].lang}
          </button>
        </div>
      </div>
    </nav>
  );
};
