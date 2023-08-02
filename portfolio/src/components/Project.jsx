import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Project = ({ src, title, site, ghlink, desc, start }) => {
  return (
    <div className="flex-col border-violet-800 border-4 my-6 space-x-3 duration-700  ease-in-out" data-carousel-item="active">
      <div className=" border-green-800 border-4 p-3">
        <img src={src} />
      </div>
      <div>
        <div className=" border-red-800 border-4 p-3">
          <p className="text-3xl">{title}</p>
          <Link to={site} target="_blank" rel="norefferer">{title} Site</Link>
          <Link to={ghlink} target="_blank" rel="norefferer">
            <FontAwesomeIcon icon={faGithub} className="text-blue-400" />
          </Link>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;

{/* <div className="flex flex-col border-violet-800 border-4 my-6 space-x-3 relative w-full">
<div className=" border-green-800 border-4 p-3">
  <img src={src} />
</div>
<div>
  <div className=" border-red-800 border-4 p-3">
    <p className="text-3xl">{title}</p>
    <Link to={site} target="_blank" rel="norefferer">{title} Site</Link>
    <Link to={ghlink} target="_blank" rel="norefferer">
      <FontAwesomeIcon icon={faGithub} className="text-blue-400" />
    </Link>
    <p>{desc}</p>
  </div>
</div>
</div> */}