import { Checkbox } from "antd";
import "./App.css";
// import Button from "./Components/CustomButton/CustomButtonComponent";
// import { Button } from "antd";
import CustomButton from "./Components/AntButton/otherMethod";
// import CustomButtonLink from "./Components/CustomButtonLink";
import styled from "styled-components";
import CustomCheckbox from "./Components/CustomCheckbox/Index";

function App() {
  return (
    <>
      <CustomCheckbox
        label="Checkbox"
        onChange={(e) => console.log(`checked = ${e.target.value}`)}
      />
    </>
  );
}

export default App;
