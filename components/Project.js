import dynamic from "next/dynamic";
import React from "react";
import ProjectData from "../pages/api/projectData";
import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <div id="project">
      <div className="container">
        <h1 className="project-heading">PROJECTS</h1>
        <div className="project-container">
          {ProjectData.map((val, ind) => {
            return (
              <ProjectCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                sourcecode={val.sourcecode}
              ></ProjectCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Project), { ssr: false });
