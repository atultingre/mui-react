import React, { useState } from "react";
import { Autocomplete, Paper, Stack, TextField } from "@mui/material";

const skills = ["HTML", "CSS", "JavaScript", "React"];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutocomplete = () => {
  const [value, setValue] = useState(null);
  const [skill, setSkill] = useState(null);

  console.log({ value });
  console.log({ skill });

  return (
    <Stack spacing={4}>
      <Paper sx={{ padding: "2rem", mb: "1.5rem" }}>
        <h1>Mui Autocomplete</h1>
        <Autocomplete
          options={skills}
          renderInput={(params) => <TextField {...params} label="skills" />}
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
        />

        <Autocomplete
          options={skills}
          renderInput={(params) => <TextField {...params} label="skills" />}
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          freeSolo
        />

        <Autocomplete
          options={skillsOptions}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => <TextField {...params} label="skills" />}
          value={skill}
          onChange={(e, newValue) => setSkill(newValue)}
        />
      </Paper>
    </Stack>
  );
};

export default MuiAutocomplete;
