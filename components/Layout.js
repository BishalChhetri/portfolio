import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Button,
} from "@mui/material";

import Head from "next/head";
import NextLink from "next/link";
import { Link as Links } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Layout({ children }) {
  const [showNavbar, setshowNavbar] = useState(false);

  const toggleshowNavbar = () => {
    setshowNavbar(!showNavbar);
  };

  if (showNavbar) {
    setTimeout(() => setshowNavbar(false), 2000);
  }

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.3rem",
        fontWeight: "bold",
        margin: "2rem 0",
        marginLeft: "-8rem",
        fontFamily: "Arial",
        color: "#000000",
      },
      h2: {
        fontSize: "0.9rem",
        fontWeight: "bold",
        margin: "1rem 0 5rem",
        fontFamily: "Montserrat",
      },
      body1: {
        fontFamily: "Montserrat",
        fontWeight: "bold",
      },
      footer: {
        background: "#202A44",
        color: "#FFA500",
        textAlign: "center",
        fontFamily: "Arial",
      },
      front1: {
        color: "#E1D9D1",
      },
    },
  });

  return (
    <>
      <Head>
        <title>Bishal KC</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="appbar">
          <AppBar
            position="static"
            style={{
              background: "black",
              height: "2.8rem",
            }}
          >
            <Toolbar style={{ top: "-0.5rem" }}>
              <NextLink href="/" passHref>
                <Link
                  style={{
                    textDecoration: "none",
                    fontSize: "1.2rem",
                    color: "#FF3908",
                    fontFamily: "Arial",
                    fontWeight: "bold",
                  }}
                >
                  <a className="navMainComp">BISHAL.</a>
                </Link>
              </NextLink>

              <div style={{ flexGrow: "1" }}></div>
              <div className="navComp">
                <Links
                  activeClass="active"
                  to=""
                  spy={true}
                  smooth={true}
                  offset={40}
                  duration={500}
                  style={{
                    textDecoration: "none",
                    padding: "0.8rem",
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                >
                  HOME
                </Links>
                <Links
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={40}
                  duration={500}
                  style={{
                    textDecoration: "none",
                    padding: "0.8rem",
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                >
                  ABOUT
                </Links>

                <Links
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-8}
                  duration={500}
                  style={{
                    textDecoration: "none",
                    padding: "0.8rem",
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                >
                  PROJECTS
                </Links>

                <Links
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={90}
                  duration={500}
                  style={{
                    textDecoration: "none",
                    padding: "0.8rem",
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                >
                  CONTACT
                </Links>
              </div>

              <div className="navButton">
                <Button
                  style={{
                    color: "#8b0000",
                    fontSize: "1.3rem",
                  }}
                  onClick={() => toggleshowNavbar()}
                >
                  {" "}
                  <FontAwesomeIcon icon={faBars} />{" "}
                </Button>
              </div>
            </Toolbar>
            {showNavbar ? (
              <div className="navBarMini">
                <button>
                  <a>HOME</a>
                </button>

                <button>
                  <Links
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={40}
                    duration={500}
                  >
                    ABOUT
                  </Links>
                </button>
                <button>
                  <Links
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={15}
                    duration={500}
                  >
                    <a>PROJECTS</a>
                  </Links>
                </button>
                <button>
                  <Links
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={90}
                    duration={500}
                  >
                    CONTACT
                  </Links>
                </button>
              </div>
            ) : null}
          </AppBar>
        </div>

        <div>{children}</div>

        <footer
          style={{
            position: "fixed",
            bottom: "0",
            left: "0",
            width: "100%",
          }}
        >
          <Typography component="footer" variant="footer">
            <strong>© Bishal KC 2020</strong>
          </Typography>
        </footer>
      </ThemeProvider>
    </>
  );
}

export default dynamic(() => Promise.resolve(Layout), { ssr: false });
