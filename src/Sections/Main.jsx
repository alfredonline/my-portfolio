import { Typography, Button } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useMediaQuery } from "@mui/material";

function Main() {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <div className="main animate__animated animate__fadeInUp">
      <Typography variant="importantText">
        Junior, full stack developer (MERN stack) based in Essex
      </Typography>
      <Typography variant="subText" className="subText">
        I am a passionate web developer based in the UK focused on creating
        unique projects that help people learn new skills. I use a variety of technologies 
        to achieve my goals. Welcome to my portfolio.
      </Typography>
      <div className="buttonContainer" style={{ margin: matches && "0 auto" }}>
        <Button variant="ctaMain" startIcon={<GitHubIcon />}>
          <a
            href="https://github.com/alfredonline"
            target="_blank"
            rel="noopener noreferrer"
            className="removeLinkWhiteText"
          >
            Visit Github
          </a>
        </Button>
        <Button variant="secondaryBtn" startIcon={<ViewListIcon />}>
          <a href="#Projects" className="removeLinkWhiteText">
            Projects
          </a>
        </Button>
      </div>
    </div>
  );
}

export default Main;
