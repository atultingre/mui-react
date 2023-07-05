import React from "react";
import { Box, Divider, Stack } from "@mui/material";

const MuiStack = () => {
  return (
    <>
    <h1>Mui Stack</h1>
      <Stack sx={{ border: "1px solid" }} direction="row" spacing={2}>
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
          
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}></Box>
          direction="row"
      </Stack>
      <Stack sx={{ border: "1px solid" }}  >
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
          
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}></Box>
          Mui Stack
      </Stack>
      <Stack sx={{ border: "1px solid" }} direction="row-reverse">
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
          p={2}></Box>
          direction="row-reverse"
      </Stack>
      <Stack sx={{ border: "1px solid" }} direction="column-reverse">
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
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}></Box>
          direction="column-reverse"
      </Stack>
      <Stack sx={{ border: "1px solid" }} direction="row">
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
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}></Box>
      </Stack>
      <Stack sx={{ border: "1px solid" }} direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
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
          p={2}></Box>
           direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}
      </Stack>
    </>
  );
};

export default MuiStack;
