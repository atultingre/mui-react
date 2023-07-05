import { Box, Grid, Paper } from "@mui/material";
import React from "react";

const MuiPaper = () => {
  return (
    <>
      <Paper sx={{ padding: "32px" }} elevation={4}>
        <h1>Mui Paper</h1>
        <Grid container my={4}>
          <Grid item xs={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
        <Grid container my={4}>
          <Grid item xs={9}>
            <Box bgcolor="primary.light" padding={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box bgcolor="primary.light" padding={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
        <Grid container my={4}>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
        <Grid container my={4}>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>

        <Grid container my={4} spacing={2}>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>

        <Grid container my={4} rowSpacing={2} columnSpacing={1}>
          <Grid item xs={6}>
            <Box bgcolor="primary.light" padding={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="primary.light" padding={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="primary.light" padding={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="primary.light" padding={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ padding: "32px", mt:"20px" }}>
        <h1>Mui Paper</h1>
        <Grid container my={4}>
          <Grid item xs={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
        <Grid container my={4}>
          <Grid item xs={9}>
            <Box bgcolor="primary.light" padding={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box bgcolor="primary.light" padding={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
        <Grid container my={4}>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
        <Grid container my={4}>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>

        <Grid container my={4} spacing={2}>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.light" padding={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>

        <Grid container my={4} rowSpacing={2} columnSpacing={1}>
          <Grid item xs={6}>
            <Box bgcolor="primary.light" padding={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="primary.light" padding={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="primary.light" padding={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="primary.light" padding={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default MuiPaper;
