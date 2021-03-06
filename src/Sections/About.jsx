import { Typography } from "@mui/material";
import React from "react";
import Title from "../Components/Title";

function About() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        display: "flex",
        justifyContent: "center",
        padding: "10px",
        textAlign: "center",
        maxWidth: "80%",
        margin: "0 auto",
        minHeight: "40vh"
      }}
    >
      <Title text="About Me" />
      <Typography variant="subText">
        I am a junior web developer based in the UK. I absolutely love writing
        code and helping other people. I speak fluent Spanish after having lived
        in Spain for 4 years. I enjoy reading, doing exercise and being
        outdoors. I am 25 years-old and have a genuine passion for developing
        unique projects that help other people.
      </Typography>
      <Typography variant="subText" sx={{ fontStyle: "italic", fontSize: "16px" }}>
        * Although I have worked in Spain for 4 years, it is important to note
        that I am a British citizen, born and bred in the UK, and have every
        legal right to live and work in the UK.
      </Typography>
    </div>
  );
}

export default About;
