import React, { useState } from "react";
import { TextField, MenuItem, Stack, Paper } from "@mui/material";

const MuiSelect = () => {
  const [countries, setCountries] = useState([]);
  console.log(countries);
  const handleChange = (e) => {
    const value = e.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Stack spacing={4}  >
      <Paper sx={{ padding: "2rem", mb: "1.5rem" }}>
        <h1>Mui Select</h1>
        <Stack display="flex" flexWrap="wrap" gap={1} mt={1} >
          <TextField
            label="Select country"
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              multiple: true,
            }}
            color="primary"
            size="small">
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austraia</MenuItem>
          </TextField>
          <TextField
            label="Select country"
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              multiple: true,
            }}
            color="secondary"
            size="small">
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austraia</MenuItem>
          </TextField>
          <TextField
            label="Select country"
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              multiple: true,
            }}
            color="error"
            size="small"
            error>
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austraia</MenuItem>
          </TextField>
          <TextField
            label="Select country"
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              multiple: true,
            }}
            color="success"
            size="small">
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austraia</MenuItem>
          </TextField>
          <TextField
            label="Select country"
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              multiple: true,
            }}
            color="warning"
            size="small">
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austraia</MenuItem>
          </TextField>
          <TextField
            label="Select country"
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              multiple: true,
            }}
            color="info"
            size="small">
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austraia</MenuItem>
          </TextField>
        </Stack>
        <Stack display="flex" flexWrap="wrap" gap={1} mt={1} >
          <TextField
            label="Select country"
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              multiple: true,
            }}
            color="primary"
            size="medium">
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austraia</MenuItem>
          </TextField>
          <TextField
            label="Select country"
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              multiple: true,
            }}
            color="secondary"
            size="medium">
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austraia</MenuItem>
          </TextField>
          <TextField
            label="Select country"
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              multiple: true,
            }}
            color="error"
            size="medium"
            error>
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austraia</MenuItem>
          </TextField>
          <TextField
            label="Select country"
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              multiple: true,
            }}
            color="success"
            size="medium">
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austraia</MenuItem>
          </TextField>
          <TextField
            label="Select country"
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              multiple: true,
            }}
            color="warning"
            size="medium">
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austraia</MenuItem>
          </TextField>
          <TextField
            label="Select country"
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              multiple: true,
            }}
            color="info"
            size="medium">
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austraia</MenuItem>
          </TextField>
        </Stack>
        <Stack display="flex" flexWrap="wrap" gap={1} mt={1} >
          <TextField
            label="Select country"
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              multiple: true,
            }}
            color="primary"
            size="large">
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austraia</MenuItem>
          </TextField>
          <TextField
            label="Select country"
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              multiple: true,
            }}
            color="secondary"
            size="large">
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austraia</MenuItem>
          </TextField>
          <TextField
            label="Select country"
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              multiple: true,
            }}
            color="error"
            size="large"
            error>
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austraia</MenuItem>
          </TextField>
          <TextField
            label="Select country"
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              multiple: true,
            }}
            color="success"
            size="large">
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austraia</MenuItem>
          </TextField>
          <TextField
            label="Select country"
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              multiple: true,
            }}
            color="warning"
            size="large">
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austraia</MenuItem>
          </TextField>
          <TextField
            label="Select country"
            select
            value={countries}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              multiple: true,
            }}
            color="info"
            size="large">
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Austraia</MenuItem>
          </TextField>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default MuiSelect;
