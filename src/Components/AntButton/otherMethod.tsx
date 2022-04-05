import React from "react";
import { Button } from "antd";

const CustomButton = (props: any) => {
  const customButtonStyle = {
    width: `${props.width ? props.width : "150px"}`,
    height: `${props.height ? props.height : "50px"}`,
    borderRadius: `${props.borderRadius ? props.borderRadius : "0px"}`,
    color: `${props.color ? props.color : "#FEFEFE"}`,
    backgroundColor: `${props.bgColor ? props.bgColor : "#7322C6"}`,
  };

  return <Button style={customButtonStyle}>{props.label}</Button>;
};

export default CustomButton;
