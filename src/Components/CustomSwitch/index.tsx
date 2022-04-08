import React from "react";
import { switchPropsParams } from "../types";
import "./customSwitch.less";

const CustomSwitch = (switchProps: switchPropsParams) => {
  return (
    <div
      className={`archActSwitchButton ${
        switchProps.size ? switchProps.size : "middle"
      }`}
      onClick={switchProps.onClick}
    >
      <div className={switchProps.subClass1}>{switchProps.switchParam1}</div>
      <div className={switchProps.subClass2}>{switchProps.switchParam2}</div>
    </div>
  );
};

export default CustomSwitch;
