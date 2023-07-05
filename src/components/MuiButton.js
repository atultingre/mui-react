import React, { useState } from "react";
import { Stack, Button,IconButton,ButtonGroup, ToggleButtonGroup, ToggleButton} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {
    const [formats, setFormats] = React.useState(() => ['bold', 'italic', 'underlined'] | null);

    const handleFormat = (event, newFormats) => {
      setFormats(newFormats);
      console.log(newFormats)
    };
  return (
    <Stack spacing={4}>
      <h1>Mui Button</h1>
      <Stack spacing={2} direction={"row"}>
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">secondary</Button>
        <Button variant="contained" color="error">error</Button>
        <Button variant="contained" color="warning">warning</Button>
        <Button variant="contained" color="info">info</Button>
        <Button variant="contained" color="success">success</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">Primary</Button>
        <Button variant="outlined" color="secondary">secondary</Button>
        <Button variant="outlined" color="error">error</Button>
        <Button variant="outlined" color="warning">warning</Button>
        <Button variant="outlined" color="info">info</Button>
        <Button variant="outlined" color="success">success</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">Primary</Button>
        <Button variant="text" color="secondary">secondary</Button>
        <Button variant="text" color="error">error</Button>
        <Button variant="text" color="warning">warning</Button>
        <Button variant="text" color="info">info</Button>
        <Button variant="text" color="success">success</Button>
      </Stack>
    <Stack display={"block"} spacing={2} direction={"row"}>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">medium</Button>
        <Button variant="contained" size="large">large</Button>
    </Stack>
    <Stack spacing={2} direction={"row"}>
        <Button variant="contained" startIcon={<SendIcon/>}>Send</Button>
        <Button variant="contained" endIcon={<SendIcon/>}>Send</Button>
        <IconButton color="secondary">
            <SendIcon/>
        </IconButton>
        <IconButton color="error" size="small">
            <SendIcon/>
        </IconButton>
        <Button variant="contained" disableElevation>disableElevation</Button>
        <Button variant="contained" disableRipple>disableRipple</Button>
        <Button variant="contained" onClick={()=> alert("Clicked")}>Alert</Button>
    </Stack>
    <Stack direction={"row"}>
        <Button variant="contained">Left</Button>
        <Button variant="contained">Center</Button>
        <Button variant="contained">Right</Button>
    </Stack>
    <Stack direction={"row"}>
    <ButtonGroup variant="contained">
        <Button >Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
    </ButtonGroup>
    </Stack>
    <Stack direction={"row"}>
    <ButtonGroup variant="outlined">
        <Button >Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
    </ButtonGroup>
    </Stack>
    <Stack direction={"row"}>
    <ButtonGroup variant="text">
        <Button >Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
    </ButtonGroup>
    </Stack>
    <Stack direction={"row"}>
    <ButtonGroup variant="contained" orientation="vertical" size="small" color="secondary">
        <Button onClick={()=> alert("Clicked")}>Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
    </ButtonGroup>
    </Stack>
    <Stack direction={"row"}>
        <ToggleButtonGroup   value={formats}  onChange={handleFormat} aria-label="text formatting" size="small" color="warning">
            <ToggleButton value="bold"><FormatBoldIcon/></ToggleButton>
            <ToggleButton value="italic"><FormatItalicIcon/></ToggleButton>
            <ToggleButton value="underlined"><FormatUnderlinedIcon/></ToggleButton>
        </ToggleButtonGroup>
    </Stack>
    <Stack direction={"row"}>
        <ToggleButtonGroup   value={formats}  onChange={handleFormat} aria-label="text formatting" size="small" color="error" orientation="vertical">
            <ToggleButton value="bold"><FormatBoldIcon/></ToggleButton>
            <ToggleButton value="italic"><FormatItalicIcon/></ToggleButton>
            <ToggleButton value="underlined"><FormatUnderlinedIcon/></ToggleButton>
        </ToggleButtonGroup>
    </Stack>
    <Stack direction={"row"}>
        <ToggleButtonGroup   value={formats}  onChange={handleFormat} aria-label="text formatting" size="small" color="success" exclusive>
            <ToggleButton value="bold"><FormatBoldIcon/></ToggleButton>
            <ToggleButton value="italic"><FormatItalicIcon/></ToggleButton>
            <ToggleButton value="underlined"><FormatUnderlinedIcon/></ToggleButton>
        </ToggleButtonGroup>
    </Stack>
</Stack>
  );
};

export default MuiButton;
