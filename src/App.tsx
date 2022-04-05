import "./App.css";
import Button from "./Components/CustomButton/CustomButtonComponent";

function App() {
  return (
    <>
      <h1>Colorful Custom Button Components</h1>
      <Button
        border="dashed"
        width="200px"
        height="200px"
        color="hotpink"
        radius="50%"
        onClick={() => console.log("hi")}
      >
        Click Here
      </Button>
    </>
  );
}

export default App;
