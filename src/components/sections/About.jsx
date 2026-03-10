import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Bootstrap",
    "TailwindCSS",
    "HTML",
    "CSS",
    "ejs (Embedded js)"
  ];

  const backendSkills = ["Node.js", "Python", "Express", "MongoDB", "PostgreSQL","API REST"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating meaningful innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
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

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
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
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Integrated Preparatory Cycle (second year)</strong> - INSA LYON
                  (2016-2020)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development , GUI
                  OOP ,Statistics , Machine learning
                  <br />
                  - first year obtained with high honors
                </li>
                <li>French General Baccalaureate – Mathematics & Physics Specialization
                  <br />- Self-taught candidate Graduated with High Honors (Mention Très Bien) – 17.70/20 <br />- Key Achievement: Achieved a perfect score of 20/20 in Mathematics, Physics, and Philosophy.</li>
                <li> Baccalaureate – Mathematics Specialization
                  Lycée Pilote Ariana
                  <br />- Result: Graduated with Highest Honors (Félicitations du Jury) – 18.72/20<br />- Context: Attended a selective "Lycée Pilote", with admission granted only through a highly competitive national entrance exam.</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Warehouse Logistics & Management Intern | Magasin Général{" "}
                  </h4>
                  <p>
                    Introductory Corporate Internship: Gained hands-on experience in supply chain operations and large-scale inventory management.<br/>

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
