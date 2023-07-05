import "./App.css";
import MuiSelect from "./components/MuiSelect";
import MuiTypography from "./components/MuiTypography";
import MuiButton from "./components/MuiButton";
import MuiTextFiled from "./components/MuiTextFiled";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiCheckbox from "./components/MuiCheckbox";

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButton />
      <MuiTextFiled />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckbox />
    </div>
  );
}

export default App;
