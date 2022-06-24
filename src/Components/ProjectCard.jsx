import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function ProjectCard({ name, tech, desc, ghLink, liveLink }) {
  return (
    <Grid container lg="4" xs="12" direction="column" className="ProjectCard">
      <Grid item>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#fff",
          }}
        >
          {name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          sx={{
            fontSize: "14px",
            color: "#fff",
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {tech.map((item) => {
            return <div>{item}</div>;
          })}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="subText"
          sx={{
            fontSize: "16px",
            color: "#eaebeba9",
            display: "flex",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {desc}
        </Typography>
      </Grid>
      <Grid item sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Button
          variant="ctaMain"
          startIcon={<CodeIcon />}
          sx={{ width: "100%" }}
        >
          <a
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="removeLinkWhiteText"
          >
            View Source Code
          </a>
        </Button>
        <Button
          variant="secondaryBtn"
          startIcon={<OpenInNewIcon />}
          sx={{ width: "100%" }}
        >
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="removeLinkWhiteText">View Live Site</a>
        </Button>
      </Grid>
    </Grid>
  );
}

export default ProjectCard;
