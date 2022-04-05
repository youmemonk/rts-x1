import React from "react";
import { Button } from "antd";

interface Props {
  width: string;
  height: string;
  font: string;
  color: string;
  borderRadius: string;
  border: string;
  onClick: () => void;
}

const AntButton: React.FC<Props> = ({
  color,
  font,
  width,
  height,
  children,
  onClick,
  borderRadius,
  border,
}) => {
  return (
    <Button
      onClick={onClick}
      style={{
        backgroundColor: "#7322C6",
        color: color,
        width: width,
        height: height,
        font: font,
        boxShadow: "0px 3px 6px #00000029",
        borderRadius: borderRadius,
        border: border,
      }}
    >
      {children}
    </Button>
  );
};

export default AntButton;
