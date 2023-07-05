import { Box } from "@mui/material";
import React from "react";

const MuiBox = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          width: "100",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}>
        <h1>Mui Box</h1>
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100"
        bgcolor="success.light"
        p={2}></Box>
    </>
  );
};

export default MuiBox;
