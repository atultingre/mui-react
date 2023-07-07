import "./App.css";
import MuiSelect from "./components/MuiSelect";
import MuiTypography from "./components/MuiTypography";
import MuiButton from "./components/MuiButton";
import MuiTextFiled from "./components/MuiTextFiled";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiSwitch from "./components/MuiSwitch";
import MuiRating from "./components/MuiRating";
import MuiAutocomplete from "./components/MuiAutocomplete";
import MuiBox from "./components/MuiBox";
import MuiStack from "./components/MuiStack";
import MuiGrid from "./components/MuiGrid";
import MuiPaper from "./components/MuiPaper";
import MuiCard from "./components/MuiCard";
import MuiAccordion from "./components/MuiAccordion";
import MuiImageList from "./components/MuiImageList";
import MuiNavbar from "./components/MuiNavbar";
import MuiMenu from "./components/MuiMenu";
import { Paper } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Paper sx={{ padding: "2rem" , mb: "1rem"}}>
        <MuiTypography />
        <MuiButton />
        <MuiTextFiled />
        <MuiSelect />
        <MuiRadioButton />
        <MuiCheckbox />
        <MuiSwitch />
        <MuiRating />
        <MuiAutocomplete />
        <MuiBox />
        <MuiStack />
        <MuiGrid />
        <MuiPaper />
        <MuiCard />
        <MuiAccordion />
        <MuiImageList />
        <MuiNavbar />
        <MuiMenu />
      </Paper>
    </div>
  );
}

export default App;
