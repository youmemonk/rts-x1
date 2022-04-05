import { Checkbox } from "antd";
import "./App.css";
// import Button from "./Components/CustomButton/CustomButtonComponent";
// import { Button } from "antd";
import CustomButton from "./Components/AntButton/otherMethod";
// import CustomButtonLink from "./Components/CustomButtonLink";
import styled from "styled-components";

function App() {
  return (
    <>
      <CustomButton label="Hi" />
      {/* <CustomButtonLink label="Hello World" /> */}

      {/* <Checkbox style={{ backgroundColor: "red", borderColor: "red" }}>
        This is checkbox
      </Checkbox> */}
    </>
  );
}

export default App;
