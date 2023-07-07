import { CatchingPokemon } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const MuiNavbar = () => {
  return (
    <>
      <Paper sx={{ padding: "2rem", mb: "1.5rem" }} >
        <h1>Mui Navbar</h1>

        <AppBar sx={{mb:"1rem"}} position="static" color="primary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo">
              <CatchingPokemon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              POKEMONAPP
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button color="inherit">Features</Button>
              <Button color="inherit">Pricing</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Login</Button>
            </Stack>
          </Toolbar>
        </AppBar>
        <AppBar sx={{mb:"1rem"}} position="static" color="warning">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo">
              <CatchingPokemon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              POKEMONAPP
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button color="inherit">Features</Button>
              <Button color="inherit">Pricing</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Login</Button>
            </Stack>
          </Toolbar>
        </AppBar>
        <AppBar sx={{mb:"1rem"}} position="static" color="secondary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo">
              <CatchingPokemon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              POKEMONAPP
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button color="inherit">Features</Button>
              <Button color="inherit">Pricing</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Login</Button>
            </Stack>
          </Toolbar>
        </AppBar>
        <AppBar sx={{mb:"1rem"}} position="static" color="error">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo">
              <CatchingPokemon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              POKEMONAPP
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button color="inherit">Features</Button>
              <Button color="inherit">Pricing</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Login</Button>
            </Stack>
          </Toolbar>
        </AppBar>
        <AppBar sx={{mb:"1rem"}} position="static" color="success">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo">
              <CatchingPokemon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              POKEMONAPP
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button color="inherit">Features</Button>
              <Button color="inherit">Pricing</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Login</Button>
            </Stack>
          </Toolbar>
        </AppBar>
        <AppBar sx={{mb:"1rem"}} position="static" color="info">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo">
              <CatchingPokemon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              POKEMONAPP
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button color="inherit">Features</Button>
              <Button color="inherit">Pricing</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Login</Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Paper>
    </>
  );
};

export default MuiNavbar;
