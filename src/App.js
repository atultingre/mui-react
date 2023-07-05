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

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButton />
      <MuiTextFiled />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckbox />
      <MuiSwitch/>
      <MuiRating/>
      <MuiAutocomplete/>
    </div>
  );
}

export default App;
