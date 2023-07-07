import { Box, Paper } from "@mui/material";
import React from "react";

const MuiBox = () => {
  return (
    <>
      <Paper sx={{ padding: "2rem", mb: "1.5rem" }}>
          <h1>Mui Box</h1>
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
      </Paper>
    </>
  );
};

export default MuiBox;
