import dynamic from "next/dynamic";
import React from "react";
import { Typography } from "@mui/material";
import { Link as Links } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Front() {
  return (
    <div id="header">
      <div className="container">
        <div className="header-text">
          <h2>HELLO, WORLD.</h2>
          <h1>I'm Bishal Chhetri.</h1>

          <p>
            <Typography component="front1" variant="front1">
              |
            </Typography>{" "}
            ENTHUSIASTIC{" "}
            <Typography component="front1" variant="front1">
              |
            </Typography>{" "}
            FULL STACK DEVELOPER{" "}
            <Typography component="front1" variant="front1">
              |
            </Typography>{" "}
          </p>
          <div className="more">
            <Links
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              color="#ffffff"
            >
              <a>
                {" "}
                More About Me <FontAwesomeIcon icon={faAngleDown} />{" "}
              </a>
            </Links>
          </div>
          <div className="social-icons-header">
            <a
              href="https://www.facebook.com/bishal.kc.54379"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FontAwesomeIcon icon={faFacebook} />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/bishal-kc-613001219/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </a>
            <a
              href="https://github.com/BishalChhetri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Front), { ssr: false });
