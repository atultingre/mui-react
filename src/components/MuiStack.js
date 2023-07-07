import React from "react";
import { Box, Divider, Paper, Stack } from "@mui/material";

const MuiStack = () => {
  return (
    <>
      <Paper sx={{ padding: "2rem", mb: "1.5rem" }}>
        <h1>Mui Stack</h1>
        <Stack sx={{ border: "1px solid", mb: "1rem" }} direction="row" spacing={2}>
          <Box
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              width: "100px",
              height: "100px",
              padding: "16px",
              "&:hover": {
                backgroundColor: "primary.light",
              },
            }}></Box>
          <Box
            display="flex"
            height="100px"
            width="100px"
            bgcolor="success.light"
            p={2}>

          direction="row"
            </Box>
        </Stack>
        <Stack sx={{ border: "1px solid", mb: "1rem" }}>
          <Box
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              width: "100px",
              height: "100px",
              padding: "16px",
              "&:hover": {
                backgroundColor: "primary.light",
              },
            }}></Box>
          <Box
            display="flex"
            height="100px"
            width="100px"
            bgcolor="success.light"
            p={2}>

          Mui Stack
            </Box>
        </Stack>
        <Stack sx={{ border: "1px solid", mb: "1rem" }} direction="row-reverse">
          <Box
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              width: "100px",
              height: "100px",
              padding: "16px",
              "&:hover": {
                backgroundColor: "primary.light",
              },
            }}>
            Mui Stack
          </Box>
          <Box
            display="flex"
            height="100px"
            width="100px"
            bgcolor="success.light"
            p={2}>

          direction="row-reverse"
            </Box>
        </Stack>
        <Stack sx={{ border: "1px solid", mb: "1rem" }} direction="column-reverse">
          <Box
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              width: "100px",
              height: "100px",
              padding: "16px",
              "&:hover": {
                backgroundColor: "primary.light",
              },
            }}></Box>
          <Box
            display="flex"
            height="100px"
            width="100px"
            bgcolor="success.light"
            p={2}>

          direction="column-reverse"
            </Box>
        </Stack>
        <Stack sx={{ border: "1px solid", mb: "1rem" }} direction="row">
          <Box
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              width: "100px",
              height: "100px",
              padding: "16px",
              "&:hover": {
                backgroundColor: "primary.light",
              },
            }}></Box>
          <Box
            display="flex"
            height="100px"
            width="100px"
            bgcolor="success.light"
            p={2}></Box>
        </Stack>
        <Stack
          sx={{ border: "1px solid", mb: "1rem" }}
          direction="row"
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}>
          <Box
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              width: "100px",
              height: "100px",
              padding: "16px",
              "&:hover": {
                backgroundColor: "primary.light",
              },
            }}>
            Mui Stack
          </Box>
          <Box
            display="flex"
            height="100px"
            width="100px"
            bgcolor="success.light"
            p={2}>

          direction="row" spacing={2} divider=
          {<Divider orientation="vertical" flexItem />}
            </Box>
        </Stack>
      </Paper>
    </>
  );
};

export default MuiStack;
