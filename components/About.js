import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faDiagramProject,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@mui/material";

function About() {
  const router = useRouter();

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <Image
              className="about-img"
              src="/images/potray.jpg"
              alt="logo"
              width="500px"
              height="520px"
              style={{
                paddingTop: "10px",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">ABOUT ME</h1>
            <p>
              I am a full stack web developer with extensive experience in a
              variety of front end and back end languages, responsive
              frameworks, databases, and best programming practices. Being full
              stack web developer I can be and giving back everything I know and
              am capable of to the technology sector.
            </p>
            <div className="project-container">
              <div className="project-card">
                <Typography
                  style={{
                    fontSize: "2.5rem",
                    color: "#0D98BA",
                    textAlign: "center",
                  }}
                >
                  <FontAwesomeIcon icon={faCode} />
                </Typography>{" "}
                <h1
                  style={{
                    fontSize: "1rem",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Skills
                </h1>
                <p
                  style={{
                    padding: 0,
                    fontSize: "1rem",
                    color: "grey",
                    textAlign: "center",
                  }}
                >
                  React, NextJs, Redux, JS, NodeJS, Sequelize Mysql, MongoDB,
                  API integration,Python,etc
                </p>
              </div>
              <div className="project-card">
                <a>
                  <Typography
                    style={{
                      fontSize: "2.5rem",
                      color: "#0D98BA",
                      textAlign: "center",
                    }}
                  >
                    <FontAwesomeIcon icon={faMedal} />
                  </Typography>{" "}
                  <h1
                    style={{
                      fontSize: "1rem",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    Work Experience
                  </h1>
                  <p
                    style={{
                      padding: 0,
                      fontSize: "1rem",
                      color: "grey",
                      textAlign: "center",
                    }}
                  >
                    2+ Years Working
                  </p>
                </a>
              </div>

              <div className="project-card">
                <Typography
                  style={{
                    fontSize: "2.5rem",
                    color: "#0D98BA",
                    textAlign: "center",
                  }}
                >
                  <FontAwesomeIcon icon={faDiagramProject} />
                </Typography>{" "}
                <h1
                  style={{
                    fontSize: "1rem",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Projects
                </h1>
                <p
                  style={{
                    padding: 0,
                    fontSize: "1rem",
                    color: "grey",
                    textAlign: "center",
                  }}
                >
                  10+ Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(About), { ssr: false });
