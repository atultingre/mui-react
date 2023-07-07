import React, { useState } from "react";
import { Stack, TextField,InputAdornment, Paper  } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const MuiTextFiled = () => {
    const [value,setValue] = useState("")
  return (
    <Stack spacing={4}>
    <Paper sx={{padding: "2rem", mb: "1.5rem"}}>

      <h1>Mui TextFiled</h1>
      <Stack direction={"row"} display="flex" flexWrap="wrap" gap={1} mt={1}>
        <TextField label="primary" variant="outlined" color="primary" />
        <TextField label="primary" variant="filled" color="primary" />
        <TextField label="primary" variant="standard" color="primary" />
      </Stack>
      <Stack direction={"row"} display="flex" flexWrap="wrap" gap={1} mt={1}>
        <TextField label="secondary" variant="outlined" color="secondary" />
        <TextField label="secondary" variant="filled" color="secondary" />
        <TextField label="secondary" variant="standard" color="secondary" />
      </Stack>
      <Stack direction={"row"} display="flex" flexWrap="wrap" gap={1} mt={1}>
        <TextField label="error" variant="outlined" color="error" />
        <TextField label="error" variant="filled" color="error" />
        <TextField label="error" variant="standard" color="error" />
      </Stack>
      <Stack direction={"row"} display="flex" flexWrap="wrap" gap={1} mt={1}>
        <TextField label="warning" variant="outlined" color="warning" />
        <TextField label="warning" variant="filled" color="warning" />
        <TextField label="warning" variant="standard" color="warning" />
      </Stack>
      <Stack direction={"row"} display="flex" flexWrap="wrap" gap={1} mt={1}>
        <TextField label="success" variant="outlined" color="success" />
        <TextField label="success" variant="filled" color="success" />
        <TextField label="success" variant="standard" color="success" />
      </Stack>
      <Stack direction={"row"} display="flex" flexWrap="wrap" gap={1} mt={1}>
        <TextField label="Small primary" size="small" color="primary" />
        <TextField label="Small secondary" size="small" color="secondary" />
        <TextField label="Small error" size="small" color="error" />
        <TextField label="Small warning" size="small" color="warning" />
        <TextField label="Small success" size="small" color="success" />
      </Stack>
      <Stack direction={"row"} display="flex" flexWrap="wrap" gap={1} mt={1}>
        <TextField label="Form Input required" required />
        <TextField label="helperText" helperText="Do not share your password with anyone"/>
        <TextField label="password"  type="password"/>
        <TextField label="disabled" type="password" disabled/>
        <TextField label="Read Only" InputProps={{readOnly: true}}/>
      </Stack>
      <Stack direction={"row"} display="flex" flexWrap="wrap" gap={1} mt={1}>
        <TextField label="password" required error/>
        <TextField label="password" required value={value} onChange={(e)=> setValue(e.target.value)} error={!value} helperText={!value ? 'Required': 'Do not share your password with anyone'}/>
        <TextField label="Amount" InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>
        }}/>
        <TextField label="Weight" InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>
        }}/>
        <TextField label="password" type="password" InputProps={{
            endAdornment: <InputAdornment position="end"><VisibilityOffIcon/></InputAdornment>
        }}/>
      </Stack>
    </Paper>
    </Stack>
  );
};

export default MuiTextFiled;
