import "./App.css";
import MuiSelect from "./components/MuiSelect";
import MuiTypography from "./components/MuiTypography";
import MuiButton from "./components/MuiButton";
import MuiTextFiled from "./components/MuiTextFiled";

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButton />
      <MuiTextFiled />
      <MuiSelect/>
    </div>
  );
}

export default App;
