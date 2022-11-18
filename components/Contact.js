import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faHouse } from "@fortawesome/free-solid-svg-icons";
import { createTheme, textAlign, ThemeProvider } from "@mui/system";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Image from "next/image";

function Contact() {
  const router = useRouter();
  const theme = createTheme({
    typography: {
      p: {
        fontSize: "0.6rem",
        fontWeight: "bold",
        margin: "1rem 0 5rem",
        fontFamily: "Arial",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">CONTACT</h1>
              <Image
                className="contact-img"
                src="/images/contact.jpg"
                alt="contact"
                width="530px"
                height="330px"
                style={{
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              />
              <br />
            </div>
            <div className="contact-right">
              <p style={{ color: "#FFA500" }}>
                Do you feel like talking to me?{" "}
              </p>
              <p>
                If so, you can either mail me or connect with me at various
                social media.
              </p>
              <br />
              <Typography style={{ fontSize: "0.9rem" }}>
                <FontAwesomeIcon icon={faHouse} /> Pokhara 15, Nepal
              </Typography>{" "}
              <Typography style={{ fontSize: "0.9rem" }}>
                <FontAwesomeIcon icon={faPaperPlane} /> kcbisal1@gmail.com
              </Typography>
              <br />
              <p style={{ color: "#FFA500" }}>E-MAIL</p>
              <p>
                <button
                  className="button"
                  onClick={() => router.push("mailto:kcbisal1@gmail.com")}
                >
                  <a>Email Me</a>
                </button>
              </p>
              <Typography component="p" variant="p">
                These links will redirect to some external mail service
                provider. Please include relevant subject and body, and then
                send the mail.
              </Typography>
            </div>
          </div>
          <div className="social-icons">
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
    </ThemeProvider>
  );
}

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
