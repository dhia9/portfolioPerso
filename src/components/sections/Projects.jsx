import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">SpotStories</h3> 
              <p className="text-gray-400 mb-4">
                
                Full-Stack/Backend Focus: Architecture: MVC design pattern for clean, maintainable server-side logic.<br /><br />

Data: Scalable NoSQL modeling with MongoDB & Mongoose.<br /><br />

Security: Implementation of secure Auth systems and Role-Based Access Control (RBAC).<br /><br />


              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", , "Express", "MongoDB", "Mongoose",
"API REST",  "MVC architecture", "authentification" , "EJS", "Bootstrap","Passport.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a target="_blank"
                  href="https://spotstories.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Productivity App – Task Manager</h3>
              <p className="text-gray-400 mb-4">
                
Production-ready task management system with offline-first architecture. <br /><br />

Advanced Persistence & State: Integrated Dexie.js (IndexedDB) for robust offline functionality and high-performance storage, coupled with SWR for efficient data fetching and synchronization.<br /><br />

Premium UI/UX Architecture: Engineered a sophisticated design system using Material UI (MUI), featuring custom theming and a modular, scalable structure designed for long-term maintenance.
<br /><br />


              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[ "React (Advanced Hooks, SWR)", "Material UI (MUI)", " JavaScript ES6+", "Vite"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a target="_blank"
                  href="https://dhia9.github.io/amelioration-to-do-list/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div> 
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Practical To do list app</h3>
              <p className="text-gray-400 mb-4">

Dynamic CRUD application with local data persistence. <br />   <br />

State Management: Architected a reactive UI using React Hooks (useState, useEffect) to manage complex task logic and real-time interface updates.<br /><br />

Data Persistence: Integrated the Web Storage API (localStorage) to ensure user data remains persistent across browser sessions without a backend.<br /><br />

              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React (hooks, state management)",
"JavaScript ES6+", "localStorage", "HTML", "CSS","Material UI"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a target="_blank"
                  href="https://dhia9.github.io/todolist/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Dice game</h3>
              <p className="text-gray-400 mb-4">
                Dynamic task management application with optimized state logic. <br /><br />

State-Driven Interface: Developed a reactive UI using React Hooks (useState, useEffect) to ensure seamless real-time updates and efficient state management.<br /><br />

Component-Based Architecture: Engineered a modular codebase using reusable functional components, prioritizing clean code, scalability, and strict separation of concerns.<br /><br />
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["REACT", "nodeJS", "JavaScript"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a target="_blank"
                  href="https://dhia9.github.io/Die-game/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">TicTacToe</h3>
              <p className="text-gray-400 mb-4">
                Interactive game engine built with efficient state management and logic.br <br /><br />

Algorithmic Logic: Engineered a custom win-condition evaluator and grid-system algorithm to handle real-time game states and draw scenarios.<br /><br />

Event-Driven Architecture: Leveraged ES6+ JavaScript to build a modular system, separating game core logic from dynamic DOM updates for a responsive UI.<br /><br />


              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript (ES6+)"," DOM API"," Event Handling", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a target="_blank"
                  href="https://dhia9.github.io/tictactoe/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Algorithmic Optimization – Python (Upgrade-Shapley)</h3>
              <p className="text-gray-400 mb-4">
                
High-performance implementation of Cooperative Game Theory for resource allocation. <br /><br />

Algorithmic Optimization: Conducted a deep complexity analysis to refactor legacy code, successfully reducing computational overhead and improving execution speed for large datasets.<br /><br />

Game Theory & Robustness: Engineered an optimized Shapley Value algorithm for fair resource distribution, ensuring reliability through rigorous unit testing and modular programming.<br /><br />
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Problem Solving ","Python", "Algorithmic Analysis", "Computational Complexity"," Unit Testing (unittest/pytest)"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a target="_blank"
                  href="https://github.com/dhia9/Upgrade-Shapeley"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div> 
            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
