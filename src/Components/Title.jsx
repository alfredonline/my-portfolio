import { Typography } from "@mui/material";
import React from "react";

function Title({ text }) {
  return (
    <Typography variant="title" sx={{padding: "20px"}}>
      {text}
    </Typography>
  );
}

export default Title;
