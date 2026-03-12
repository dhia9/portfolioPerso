import { RevealOnScroll } from "../RevealOnScroll";
// import monCv from '../../assets/Dhia-Somai_cv_.pdf';
import monCv from "../../assets/Dhia-Somai_cv_.pdf";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Dhia Somai
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Full-Stack Developer | INSA Lyon | Thales STEM for All Laureate
            <br />


            Second-year engineering student at France’s top-ranked post-bac school , seeking a 3-year apprenticeship starting next year.<br /> Passionate about Full-Stack development, with a strong interest in Data Science and Data Engineering roles.

          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
            {/* // En haut de votre fichier React/Vue


// Dans votre JSX
<a href={monCv} download="CV_Dhia_Somai.pdf" ...> */}
            <a
              href={monCv}
              download="CV_Dhia_Somai.pdf"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              download cv
            </a>
            

          </div>
          <br />
          <div className="flex justify-center space-x-4">
            <a target="_blank" href="https://www.linkedin.com/in/dhia-somai-/"  className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">linkedin</a>
            <a target="_blank" href="https://github.com/dhia9" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">github</a>
        </div></div>
      </RevealOnScroll>
    </section>
  );
};
