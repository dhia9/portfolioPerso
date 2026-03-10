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
              <h3 className="text-xl font-bold mb-2"> Cloud Platform</h3>
              <p className="text-gray-400 mb-4">
                
                Backend Architecture: Developed a robust server-side logic using the MVC (Model-View-Controller) pattern, ensuring a clean separation of concerns and high maintainability.<br/><br/>

Security & Access Control: Implemented secure user authentication and Role-Based Access Control (RBAC) to manage permissions across the platform.<br/><br/>

Data Modeling: Designed and managed a scalable NoSQL database architecture using MongoDB and Mongoose for efficient data persistence.


              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", , "Express", "MongoDB", "Mongoose",
"API REST",  "MVC architecture", "authentification" , "EJS", "Bootstrap"].map((tech, key) => (
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
              <h3 className="text-xl font-bold mb-2">To do list</h3>
              <p className="text-gray-400 mb-4">

State-Driven Interface: Developed a dynamic task management application utilizing React Hooks (useState, useEffect) to handle real-time UI updates and complex state logic.<br/><br/>

Persistent Data: Integrated Web Storage API (localStorage) to ensure data persistence, allowing users to retrieve their tasks across different browser sessions without a backend.<br/><br/>

Component-Based Architecture: Engineered the project using reusable functional components, emphasizing clean code, modularity, and a clear separation of concerns.<br/><br/>

CRUD Functionality: Implemented full CRUD operations (Create, Read, Update, Delete) with an intuitive user interface and conditional rendering for task status.
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
                State-Driven Interface: Developed a dynamic task management application utilizing React Hooks (useState, useEffect) to handle real-time UI updates and complex state logic.<br/><br/>
Component-Based Architecture: Engineered the project using reusable functional components, emphasizing clean code, modularity, and a clear separation of concerns.<br/><br/>
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
                Game Logic & Algorithms: Engineered a functional "Noughts and Crosses" game, implementing a custom algorithm to evaluate win conditions and draw states across a grid system.<br/><br/>

Dynamic DOM Manipulation: Leveraged Vanilla JavaScript to dynamically update the user interface, managing real-time board states without external libraries.<br/><br/>

Event-Driven Interaction: Developed an efficient event-handling system to process user inputs, ensuring a responsive and bug-free gaming experience.<br/><br/>

Modular Code Structure: Focused on writing clean, ES6+ JavaScript code with a modular approach to separate game logic from UI rendering.


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
                
Game Theory Implementation: Developed an optimized version of an algorithm based on Cooperative Game Theory, specifically focusing on the Shapley Value for fair resource allocation.<br/><br/>

Complexity Optimization: Conducted a deep analysis of algorithmic performance, successfully reducing computational complexity to improve execution speed and resource efficiency.<br/><br/>

Performance Benchmarking: Leveraged Python to refactor legacy code, emphasizing efficient data structures and algorithmic logic to handle larger datasets.<br/><br/>

Software Quality: Ensured code reliability and robustness through rigorous Unit Testing and structured, modular programming practices.<br/><br/>

Technical Stack: .
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
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">React Advanced – Productivity Suite (Todo List)</h3>
              <p className="text-gray-400 mb-4">
                
High-end productivity application featuring advanced local data persistence.<br/><br/>
Developed a comprehensive task management system focused on delivering a seamless User Experience (UX) and high-performance data handling. This project demonstrates the ability to build production-ready frontend architectures.<br/><br/>

Advanced State Management: Leveraged React Hooks and SWR for efficient data fetching, caching, and state synchronization.<br/><br/>

Local Data Persistence: Integrated Dexie.js (IndexedDB) to provide robust, permanent local storage, enabling full offline functionality and superior performance compared to standard localStorage.<br/><br/>

Premium UI/UX: Built a sophisticated design system using Material UI (MUI), featuring dynamic icon sets, custom theming, and interactive components such as modals and popups.<br/><br/>

Scalable Architecture: Implemented a modular directory structure to ensure code reusability and ease of maintenance as the application grows.



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
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
