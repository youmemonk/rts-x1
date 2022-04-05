import "./App.css";
// import Button from "./Components/CustomButton/CustomButtonComponent";
// import { Button } from "antd";
import AntButton from "./Components/AntButton";

function App() {
  return (
    <>
      <h1>Custom Components</h1>
      {/* <Button
        //? Custom Component
        border="dashed"
        width="200px"
        height="200px"
        color="hotpink"
        radius="50%"
        onClick={() => console.log("hi")}
      >
        Click Here
      </Button> */}

      <AntButton
        color="#FEFEFE"
        width="320px"
        height="40px"
        font="normal normal bold 20px/18px Europa"
        borderRadius=""
        border="none"
        onClick={() => console.log("hi")}
      >
        Change Password
      </AntButton>

      <AntButton
        color="#FEFEFE"
        width="240px"
        height="80px"
        font="normal normal bold 20px/18px Europa"
        borderRadius=""
        border="none"
        onClick={() => console.log("hi")}
      >
        Save Profile
      </AntButton>

      <AntButton
        color="#FEFEFE"
        width="285px"
        height="60px"
        font="normal normal bold 20px/18px Europa"
        borderRadius="16px"
        border="2px solid #D9E1E7"
        onClick={() => console.log("hi")}
      >
        Access Portal
      </AntButton>
    </>
  );
}

export default App;
