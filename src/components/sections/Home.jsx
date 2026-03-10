import { RevealOnScroll } from "../RevealOnScroll";

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
            I am a second-year student at INSA Lyon, ranked among the top 10 engineering schools in France and the #1 post-baccalaureate institution.<br/> I am also a laureate of the 'Thales STEM for All' award, a highly competitive distinction.
            <br/>
            As a Full-Stack Developer, I am passionate about crafting clean, scalable web applications. My goal is to build meaningful solutions that deliver both exceptional performance and a seamless user experience.

            I am currently seeking a three-year apprenticeship in a Full-Stack role starting next year.
            I'm open for opportunities in Data Science or Data Engineering
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
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
