import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Contact() {
  return (
    <div className="ContactCard">
      <div
        onClick={() => (window.location = "mailto:yourmail@gmail.com")}
        className="contactBtn"
      >
        <span> Drop Me An Email!</span> <MailIcon />
      </div>
      <a
        href="https://github.com/alfredonline"
        target="_blank"
        rel="noopener noreferrer"
        className="contactBtn removeLinkWhiteText"
      >
        <span>Find Me On GitHub</span> <GitHubIcon />
      </a>
      <a
        href="https://www.youtube.com/channel/UCx0zjKcwImRPWoWeUQenR9w"
        target="_blank"
        rel="noopener noreferrer"
        className="contactBtn removeLinkWhiteText"
      >
        <span>Sometimes I Post Coding Videos!</span> <YouTubeIcon />
      </a>
    </div>
  );
}

export default Contact;
