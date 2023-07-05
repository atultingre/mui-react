import { Typography } from "@mui/material";
import React from "react";

const MuiTypography = () => {
  return (
    <div>
      <h1>Mui Typography</h1>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" gutterBottom>h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      <Typography variant="subtitle1">sub title 1 </Typography>
      <Typography variant="subtitle2">sub title 2 </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque non nam
        reiciendis beatae nesciunt, similique porro laborum, minus adipisci,
        obcaecati quam corporis magni architecto aliquid corrupti! Placeat odit
        earum velit?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque non nam
        reiciendis beatae nesciunt, similique porro laborum, minus adipisci,
        obcaecati quam corporis magni architecto aliquid corrupti! Placeat odit
        earum velit?
      </Typography>
    </div>
  );
};

export default MuiTypography;
