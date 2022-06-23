import { Typography } from "@mui/material";
import React from "react";
import Title from "../Components/Title";

function Skills() {
  return (
    <div>
      <Title text={"Skills"} />
      <Typography
        variant="subText"
        sx={{ display: "flex", justifyContent: "center", padding: "30px", textAlign: "center", maxWidth: "80%", margin: "0 auto" }}
      >
        I am comfortable using a wide variety of technologies that are
        commonplace in the web development industry. I primarily work with the
        MERN stack and I am also completely comfortable using other technologies
        such as JWT, SASS, CSS, MaterialUI, Nginx, Linux, Git, Figma, and Vanilla Javascript.
      </Typography>
    </div>
  );
}

export default Skills;
