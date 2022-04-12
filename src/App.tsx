import { Button, Checkbox, Modal } from "antd";
import "./App.less";
// import Button from "./Components/CustomButton/CustomButtonComponent";
// import { Button } from "antd";
// import CustomButton from "./Components/AntButton/otherMethod";
import CustomButton from "./Components/CustomButton/CustomButtonComponent";
// import CustomButtonLink from "./Components/CustomButtonLink";
import CustomModal from "./Components/customModal";
import { useState } from "react";

import CustomSwitch from "./Components/CustomSwitch";
import CustomDatePicker from "./Components/CustomDatePicker";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isShow, setIsShow] = useState(true);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const element = <p>Hi this is modal Data</p>;

  return (
    <>
      {/* <CustomButton onClick={showModal} label="Show Modal" /> */}
      {/* <Button type="primary" onClick={showModal}>
        Click here
      </Button> */}

      {/* <CustomButton label="Click Me" onClick={showModal} />

      <CustomModal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      > */}

      {/* <p>Lorem ipsum dolor sit amet.</p>
        <h1>hi</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vitae
            non fuga, quisquam consequatur alias nam soluta quasi quia
            necessitatibus laborum? Necessitatibus repellendus temporibus
            tempora sapiente rerum, nobis mollitia molestias.
          </p>
        </div>
      </CustomModal> */}

      <CustomSwitch
        switchParam1="Active"
        switchParam2="Archived"
        subClass1={isShow ? "highlighted" : "normal"}
        subClass2={isShow ? "normal" : "highlighted"}
        onClick={() => {
          setIsShow(!isShow);
        }}
        size="small"
      />

      <CustomDatePicker size="large" onOK={() => console.log("checked")} />
    </>
  );
}

export default App;
