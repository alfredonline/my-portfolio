import { Grid } from "@mui/material";
import React from "react";
import ProjectCard from "../Components/ProjectCard";
import Title from "../Components/Title";

function Projects() {
  const projects = [
    {
      name: "Langregate",
      desc: "Langregate is a media aggregation site which is targeted at language learners who want to expand their vocabulary and discover new content.",
      tech: [
        "React",
        "MongoDB",
        "Linux",
        "Nginx",
        "Express",
        "JWT",
        "MaterialUI",
      ],
      gh: "https://github.com/alfredonline/langregate-frontend-code",
      live: "https://www.langregate.com/",
    },
    {
      name: "EslConvo",
      desc: "ESLConvo is a website for teachers of English as a foreign language that helps them have better conversation classes with their students. It provides a variety of resources.",
      tech: [
        "React",
        "Express",
        "MaterialUI",
        "NodeJS",
        "Various API technologies",
      ],
      gh: "https://github.com/alfredonline/esl-convo-frontend-code",
      live: "https://www.eslconvo.org/",
    },
    {
      name: "WhatIsWorthMore",
      desc: "A fun guessing game inspired by a TikTok trend in which people have to guess out of two items which one is more expensive. How many points do you think you could score?",
      tech: ["React", "MaterialUI", "Unsplash API"],
      gh: "https://github.com/alfredonline/WhatIsWorthMore-SourceCode",
      live: "https://whatisworthmore.com/",
    },
  ];

  return (
    <>
      <Title text="Projects" />
      <Grid
        container
        className="ProjectsWrapper"
        sx={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {projects.map((item) => {
          return (
            <ProjectCard
              name={item.name}
              desc={item.desc}
              tech={item.tech}
              ghLink={item.gh}
              liveLink={item.live}
            />
          );
        })}
      </Grid>
    </>
  );
}

export default Projects;
