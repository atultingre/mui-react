import React, { useState } from "react";
import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from "@mui/material";

const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleChange = (e) => {
    setAcceptTnC(e.target.checked);
  };
  console.log({acceptTnC});

  const handleSkillChange = (e) => {
    const index = skills.indexOf(e.target.value)
    if (index === -1) {
        setSkills([...skills, e.target.value])
    }else{
        setSkills(skills.filter((skill)=> skill !== e.target.value))
    }
  }  
  console.log(skills)
  return (
    <Box>
      <h1>Mui Checkbox</h1>
      <Box>
        <FormControlLabel
          label="I accept the terms and condition"
          control={<Checkbox checked={acceptTnC}  onChange={handleChange}/>}
        />
      </Box>
      <Box>
        <Checkbox icon={<BookmarkBorder/>}  checkedIcon={<Bookmark/>} checked={acceptTnC} onChange={handleChange} color="warning"/>
      </Box>
      <Box>
        <FormControl error>
            <FormLabel>Skills</FormLabel>
            <FormGroup row >
                <FormControlLabel label='HTML' control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleSkillChange} color="secondary" size="small"/>} />
                <FormControlLabel label='CSS' control={<Checkbox value='css' checked={skills.includes('css')} onChange={handleSkillChange} color="success" size="medium"/>} />
                <FormControlLabel label='JavaScript' control={<Checkbox value='javascript' checked={skills.includes('javascript')} onChange={handleSkillChange} color="error" size="large"/>} />
            </FormGroup>
            <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
