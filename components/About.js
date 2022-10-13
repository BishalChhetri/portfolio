import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";

function About() {
  const [state, setState] = useState({
    skills: true,
    experience: false,
    education: false,
  });

  const router = useRouter();

  const handleSkills = async () => {
    setState({ skills: true, experience: false, education: false });
  };
  const handleExperience = () => {
    setState({ skills: false, experience: true, education: false });
  };
  const handleEducation = () => {
    setState({ skills: false, experience: false, education: true });
  };

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
              Hello! <br />I am a aspiring Full Stack developer. <br />I was
              born in syangja and grown up in pokhara. I have completed my
              Bachelors in Computer Engineering. I manage everything from
              website navigation and layout to a company's web hosting and
              security architecture. I’m a lifelong learner and love to
              read, explore, and do things what makes me happy.
            </p>
            <div className="tab-titles">
              <p
                className={`tab-links ${state.skills ? "active-link" : ""}`}
                onClick={handleSkills}
              >
                Skills
              </p>
              <p
                className={`tab-links ${state.experience ? "active-link" : ""}`}
                onClick={handleExperience}
              >
                Experience
              </p>
              <p
                className={`tab-links ${state.education ? "active-link" : ""}`}
                onClick={handleEducation}
              >
                Education
              </p>
            </div>
            <div
              className={`tab-contents ${state.skills ? "active-tab" : ""}`}
              id="skills"
            >
              <ul>
                <li>
                  <span>FRONTEND</span>
                  <br />
                  HTML, CSS, JavaScript, Python, React and NextJS.
                </li>
                <li>
                  <span>BACKEND</span>
                  <br />
                  NodeJS, MongoDB, PostgreSQL and Sequelize MYSQL.
                </li>
                <li>
                  <span>OTHERS</span>
                  <br />
                  Designing Web/App interfaces, Testing, etc
                </li>
              </ul>
            </div>
            <div
              className={`tab-contents ${state.experience ? "active-tab" : ""}`}
              id="experience"
            >
              <ul>
                <li>
                  <span>Sep 2022 - now </span>
                  <br />
                  FullStack Developer
                </li>
                <li>
                  <span>Jan - April 2022.</span>
                  <br />
                  Database Administrator
                </li>
                <li>
                  <span>Oct - Dec 2022</span>
                  <br />
                  Quality Control
                </li>
              </ul>
            </div>
            <div
              className={`tab-contents ${state.education ? "active-tab" : ""}`}
              id="education"
            >
              <ul>
                <li>
                  <span>2017</span>
                  <br />
                  High School
                </li>
                <li>
                  <span>2017-2022</span>
                  <br />
                  Bachelor Degree
                </li>
              </ul>
            </div>
            <div className="hire">
              <button
                className="hire-btn"
                onClick={() => router.push("mailto:kcbisal1@gmail.com")}
              >
                <a>Hire Me</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(About), { ssr: false });
