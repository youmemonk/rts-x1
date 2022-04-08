import React from "react";
import { Button } from "antd";
import { buttonParams } from "../types";
import "./customButton.less";

const CustomButton = (btnProps: buttonParams) => {
  return (
    <Button
      className="defaultButton"
      type={btnProps.type ? btnProps.type : "primary"}
      size={btnProps.size}
      disabled={btnProps.disabled ? btnProps.disabled : false}
      onClick={btnProps.onClick}
      shape={btnProps.shape ? btnProps.shape : "default"}
    >
      {btnProps.label}
    </Button>
  );
};

export default CustomButton;
