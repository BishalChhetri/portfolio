import dynamic from "next/dynamic";
import React, { useState } from "react";
import NextLink from "next/link";
import { Link, Typography } from "@mui/material";
import Image from "next/Image";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <Image src={props.imgsrc} width="530px" height="330px" alt="image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p style={{ color: "#ffffff", fontSize: "0.8rem" }}>{props.text}</p>
        <div className="pro-btns">
          <NextLink href={props.sourcecode} passHref>
            <Link
              style={{
                textDecoration: "none",
                borderRadius: "3px",
                padding: "4px",
                backgroundColor: "#d3212c",
                color: "#ffffff",
                fontFamily: "arial",
                fontWeight: "bold",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <a> SOURCE CODE</a>
            </Link>
          </NextLink>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(ProjectCard), { ssr: false });
