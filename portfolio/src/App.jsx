import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import Project from "./components/Project";
import { projectDeets } from "./components/projectDetails";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
      <div>
        <button
          className="bg-black cursor-pointer w-1/2 text-center h-10"
          onClick={() => setActiveTab("home")}
        >
          <span className={activeTab === "home" ? "tab-active" : ""}>home</span>
        </button>
        <button
          className="bg-black cursor-pointer w-1/2 text-center h-10 shadow-lg"
          onClick={() => setActiveTab("projects")}
        >
          <span className={activeTab === "projects" ? "tab-active" : ""}>
            projects
          </span>
        </button>
      </div>
      {/* bg-[url("./assets/astronaut2.jpg")] */}
      <div className='w-full bg-fixed bg-orange-200 min-h-screen p-16'>
        {activeTab === "home" ? (
          <div id="intro-container" className="space-y-3 md:ml-12 mx-auto">
            <div className="space-y-2">
              <p className="text-7xl font-thin">Kayode Apena</p>
              <p className="text-gray-300 ml-8">ky-yah-day</p>
              <p className="text-lg">frontend developer</p>
            </div>
            <div className="space-x-4">
              <Link
                to="https://github.com/KAcodes"
                target="_blank"
                rel="norefferer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-white text-xl border-2 border-white p-3 rounded"
                />
              </Link>
              <Link
                to="https://www.linkedin.com/in/kayode-apena-bb7479173/"
                target="_blank"
                rel="norefferer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-white text-xl border-2 border-white p-3 rounded"
                />
              </Link>
              <Link
                to="mailto:kayodeapena@gmail.com"
                target="_blank"
                rel="norefferer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-white text-xl border-2 border-white p-3 rounded"
                />
              </Link>
            </div>
          </div>
        ) : (
          <div className="max-w-[1300] h-3/4 w-full m-auto py-4 relative">
            
          </div>
        )}
      </div>
    </>
  );
}

export default App;



/* <div
            id="controls-carousel"
            className="relative w-full"
            data-carousel="static"
          >
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="../src/assets/e-commerce.png"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item="active"
              >
                <img
                  src="../src/assets/facebook-clone.png"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="../src/assets/nationality-game.png"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="../src/assets/hangman-game.png"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="../src/assets/quiz-game.png"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </div>

            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div> */


{
  /* <div id="default-carousel" data-carousel="static" className="relative md:w-3/5 md:mx-auto">
            <div className="relative overflow-hidden">
              {projectDeets.map((project, i) => (
                  <Project
                    key={i}
                    src={project.src}
                    title={project.title}
                    site={project.link}
                    ghlink={project.gh}
                    desc={project.description}
                    start={i}
                  />
                ))}
            </div>
          </div>
 */
}

{
  /* <div className="projects">
            <div className="p-3">
              <p className="text-blue-500">Projects</p>
            </div>
            <div className="p-3 border-4 border-y-orange-500">
              {projectDeets.map((project, i) => (
                <Project
                  key={i}
                  src={project.src}
                  title={project.title}
                  site={project.link}
                  ghlink={project.gh}
                  desc={project.description}
                />
              ))}
            </div>
            <div></div>
          </div> */
}
