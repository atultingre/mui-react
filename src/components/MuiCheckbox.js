import React, { useState } from "react";
import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Paper,
} from "@mui/material";

const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleChange = (e) => {
    setAcceptTnC(e.target.checked);
  };
  console.log({ acceptTnC });

  const handleSkillChange = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };
  console.log(skills);
  return (
    <Box>
      <Paper sx={{ padding: "2rem", mb: "1.5rem" }}>
        <h1>Mui Checkbox</h1>
        <Box>
          <FormControlLabel
            label="I accept the terms and condition"
            control={
              <Checkbox
                checked={acceptTnC}
                onChange={handleChange}
                color="primary"
                size="small"
              />
            }
          />
          <FormControlLabel
            label="I accept the terms and condition"
            control={
              <Checkbox
                checked={acceptTnC}
                onChange={handleChange}
                color="secondary"
                size="small"
              />
            }
          />
          <FormControlLabel
            label="I accept the terms and condition"
            control={
              <Checkbox
                checked={acceptTnC}
                onChange={handleChange}
                color="warning"
                size="small"
              />
            }
          />
          <FormControlLabel
            label="I accept the terms and condition"
            control={
              <Checkbox
                checked={acceptTnC}
                onChange={handleChange}
                color="error"
                size="small"
              />
            }
          />
          <FormControlLabel
            label="I accept the terms and condition"
            control={
              <Checkbox
                checked={acceptTnC}
                onChange={handleChange}
                color="success"
                size="small"
              />
            }
          />
          <FormControlLabel
            label="I accept the terms and condition"
            control={
              <Checkbox
                checked={acceptTnC}
                onChange={handleChange}
                color="info"
                size="small"
              />
            }
          />
        </Box>
        <Box>
          <FormControlLabel
            label="I accept the terms and condition"
            control={
              <Checkbox
                checked={acceptTnC}
                onChange={handleChange}
                color="primary"
                size="medium"
              />
            }
          />
          <FormControlLabel
            label="I accept the terms and condition"
            control={
              <Checkbox
                checked={acceptTnC}
                onChange={handleChange}
                color="secondary"
                size="medium"
              />
            }
          />
          <FormControlLabel
            label="I accept the terms and condition"
            control={
              <Checkbox
                checked={acceptTnC}
                onChange={handleChange}
                color="warning"
                size="medium"
              />
            }
          />
          <FormControlLabel
            label="I accept the terms and condition"
            control={
              <Checkbox
                checked={acceptTnC}
                onChange={handleChange}
                color="error"
                size="medium"
              />
            }
          />
          <FormControlLabel
            label="I accept the terms and condition"
            control={
              <Checkbox
                checked={acceptTnC}
                onChange={handleChange}
                color="success"
                size="medium"
              />
            }
          />
          <FormControlLabel
            label="I accept the terms and condition"
            control={
              <Checkbox
                checked={acceptTnC}
                onChange={handleChange}
                color="info"
                size="medium"
              />
            }
          />
        </Box>
        <Box>
          <FormControlLabel
            label="I accept the terms and condition"
            control={
              <Checkbox
                checked={acceptTnC}
                onChange={handleChange}
                color="primary"
                size="large"
              />
            }
          />
          <FormControlLabel
            label="I accept the terms and condition"
            control={
              <Checkbox
                checked={acceptTnC}
                onChange={handleChange}
                color="secondary"
                size="large"
              />
            }
          />
          <FormControlLabel
            label="I accept the terms and condition"
            control={
              <Checkbox
                checked={acceptTnC}
                onChange={handleChange}
                color="warning"
                size="large"
              />
            }
          />
          <FormControlLabel
            label="I accept the terms and condition"
            control={
              <Checkbox
                checked={acceptTnC}
                onChange={handleChange}
                color="error"
                size="large"
              />
            }
          />
          <FormControlLabel
            label="I accept the terms and condition"
            control={
              <Checkbox
                checked={acceptTnC}
                onChange={handleChange}
                color="success"
                size="large"
              />
            }
          />
          <FormControlLabel
            label="I accept the terms and condition"
            control={
              <Checkbox
                checked={acceptTnC}
                onChange={handleChange}
                color="info"
                size="large"
              />
            }
          />
        </Box>
        <Box>
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={acceptTnC}
            onChange={handleChange}
            color="primary"
            size="small"
          />
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={acceptTnC}
            onChange={handleChange}
            color="secondary"
            size="small"
          />
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={acceptTnC}
            onChange={handleChange}
            color="error"
            size="small"
          />
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={acceptTnC}
            onChange={handleChange}
            color="success"
            size="small"
          />
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={acceptTnC}
            onChange={handleChange}
            color="warning"
            size="small"
          />
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={acceptTnC}
            onChange={handleChange}
            color="info"
            size="small"
          />
        </Box>
        <Box>
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={acceptTnC}
            onChange={handleChange}
            color="primary"
            size="medium"
          />
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={acceptTnC}
            onChange={handleChange}
            color="secondary"
            size="medium"
          />
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={acceptTnC}
            onChange={handleChange}
            color="error"
            size="medium"
          />
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={acceptTnC}
            onChange={handleChange}
            color="success"
            size="medium"
          />
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={acceptTnC}
            onChange={handleChange}
            color="warning"
            size="medium"
          />
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={acceptTnC}
            onChange={handleChange}
            color="info"
            size="medium"
          />
        </Box>
        <Box>
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={acceptTnC}
            onChange={handleChange}
            color="primary"
            size="large"
          />
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={acceptTnC}
            onChange={handleChange}
            color="secondary"
            size="large"
          />
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={acceptTnC}
            onChange={handleChange}
            color="error"
            size="large"
          />
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={acceptTnC}
            onChange={handleChange}
            color="success"
            size="large"
          />
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={acceptTnC}
            onChange={handleChange}
            color="warning"
            size="large"
          />
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={acceptTnC}
            onChange={handleChange}
            color="info"
            size="large"
          />
        </Box>
        <Box>
          <FormControl error>
            <FormLabel>Skills</FormLabel>
            <FormGroup row>
              <FormControlLabel
                label="HTML"
                control={
                  <Checkbox
                    value="html"
                    checked={skills.includes("html")}
                    onChange={handleSkillChange}
                    color="primary"
                    size="small"
                  />
                }
              />
              <FormControlLabel
                label="HTML"
                control={
                  <Checkbox
                    value="html"
                    checked={skills.includes("html")}
                    onChange={handleSkillChange}
                    color="secondary"
                    size="small"
                  />
                }
              />
              <FormControlLabel
                label="HTML"
                control={
                  <Checkbox
                    value="html"
                    checked={skills.includes("html")}
                    onChange={handleSkillChange}
                    color="warning"
                    size="small"
                  />
                }
              />
              <FormControlLabel
                label="HTML"
                control={
                  <Checkbox
                    value="html"
                    checked={skills.includes("html")}
                    onChange={handleSkillChange}
                    color="error"
                    size="small"
                  />
                }
              />
              <FormControlLabel
                label="HTML"
                control={
                  <Checkbox
                    value="html"
                    checked={skills.includes("html")}
                    onChange={handleSkillChange}
                    color="success"
                    size="small"
                  />
                }
              />
              <FormControlLabel
                label="HTML"
                control={
                  <Checkbox
                    value="html"
                    checked={skills.includes("html")}
                    onChange={handleSkillChange}
                    color="info"
                    size="small"
                  />
                }
              />
            </FormGroup>
            <FormGroup row>
              <FormControlLabel
                label="CSS"
                control={
                  <Checkbox
                    value="CSS"
                    checked={skills.includes("CSS")}
                    onChange={handleSkillChange}
                    color="primary"
                    size="medium"
                  />
                }
              />
              <FormControlLabel
                label="CSS"
                control={
                  <Checkbox
                    value="CSS"
                    checked={skills.includes("CSS")}
                    onChange={handleSkillChange}
                    color="secondary"
                    size="medium"
                  />
                }
              />
              <FormControlLabel
                label="CSS"
                control={
                  <Checkbox
                    value="CSS"
                    checked={skills.includes("CSS")}
                    onChange={handleSkillChange}
                    color="warning"
                    size="medium"
                  />
                }
              />
              <FormControlLabel
                label="CSS"
                control={
                  <Checkbox
                    value="CSS"
                    checked={skills.includes("CSS")}
                    onChange={handleSkillChange}
                    color="error"
                    size="medium"
                  />
                }
              />
              <FormControlLabel
                label="CSS"
                control={
                  <Checkbox
                    value="CSS"
                    checked={skills.includes("CSS")}
                    onChange={handleSkillChange}
                    color="success"
                    size="medium"
                  />
                }
              />
              <FormControlLabel
                label="CSS"
                control={
                  <Checkbox
                    value="CSS"
                    checked={skills.includes("CSS")}
                    onChange={handleSkillChange}
                    color="info"
                    size="medium"
                  />
                }
              />
            </FormGroup>
            <FormGroup row>
              <FormControlLabel
                label="JavaScript"
                control={
                  <Checkbox
                    value="JavaScript"
                    checked={skills.includes("JavaScript")}
                    onChange={handleSkillChange}
                    color="primary"
                    size="large"
                  />
                }
              />
              <FormControlLabel
                label="JavaScript"
                control={
                  <Checkbox
                    value="JavaScript"
                    checked={skills.includes("JavaScript")}
                    onChange={handleSkillChange}
                    color="secondary"
                    size="large"
                  />
                }
              />
              <FormControlLabel
                label="JavaScript"
                control={
                  <Checkbox
                    value="JavaScript"
                    checked={skills.includes("JavaScript")}
                    onChange={handleSkillChange}
                    color="warning"
                    size="large"
                  />
                }
              />
              <FormControlLabel
                label="JavaScript"
                control={
                  <Checkbox
                    value="JavaScript"
                    checked={skills.includes("JavaScript")}
                    onChange={handleSkillChange}
                    color="error"
                    size="large"
                  />
                }
              />
              <FormControlLabel
                label="JavaScript"
                control={
                  <Checkbox
                    value="JavaScript"
                    checked={skills.includes("JavaScript")}
                    onChange={handleSkillChange}
                    color="success"
                    size="large"
                  />
                }
              />
              <FormControlLabel
                label="JavaScript"
                control={
                  <Checkbox
                    value="JavaScript"
                    checked={skills.includes("JavaScript")}
                    onChange={handleSkillChange}
                    color="info"
                    size="large"
                  />
                }
              />
            </FormGroup>
            <FormHelperText>Invalid Selection</FormHelperText>
          </FormControl>
        </Box>
      </Paper>
    </Box>
  );
};

export default MuiCheckbox;
