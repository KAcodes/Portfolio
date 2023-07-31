import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
      <div>
        <button
          className={activeTab === "home" ? "tab-active" : "tab-unactive"}
          onClick={() => setActiveTab("home")}
        >
          <span className="top-post-headers">
            <span style={{ fontSize: "14px" }}>Home</span>
          </span>
        </button>
        <button
          className={activeTab === "projects" ? "tab-active" : "tab-unactive"}
          onClick={() => setActiveTab("portfolio")}
        >
          <span className="top-post-headers">
            <span style={{ fontSize: "14px" }}>Projects</span>
          </span>
        </button>
      </div>

      {activeTab === "home" ? (
        <div>
          <div>
            <p className="text-red-500">Hi, I'm Kayode</p>
            <p>Ky-yah-day</p>
            <p>Web Developer</p>
          </div>
          <div>
            <p>
              I am a frontend develop with experience building .... always
              looking for new challenges{" "}
            </p>
          </div>
          <div>
            <Link
              to="https://github.com/KAcodes"
              target="_blank"
              rel="norefferer"
            >
              <FontAwesomeIcon icon={faGithub} className="text-blue-400" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/kayode-apena-bb7479173/"
              target="_blank"
              rel="norefferer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-400" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/kayode-apena-bb7479173/"
              target="_blank"
              rel="norefferer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-400" />
            </Link>
          </div>
          <div></div>
        </div>
      ) : (
        <div className="projects">
          <div>
            <p className="text-blue-500">Projects</p>
          </div>
          <div></div>
          <div>
            <Link
              to="https://github.com/KAcodes"
              target="_blank"
              rel="norefferer"
            >
              <FontAwesomeIcon icon={faGithub} className="text-blue-400" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/kayode-apena-bb7479173/"
              target="_blank"
              rel="norefferer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-400" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/kayode-apena-bb7479173/"
              target="_blank"
              rel="norefferer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-400" />
            </Link>
          </div>
          <div></div>
        </div>
      )}

      {/*  */}
    </>
  );
}

export default App;
