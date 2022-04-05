import { Button } from "antd";

export default function customButtonLink(props: any) {
  const customButtonLinkStyle = {
    width: `${props.width ? props.width : "40px"}`,
    height: `${props.height ? props.height : "25px"}`,
    borderRadius: `${props.borderRadius ? props.borderRadius : "0px"}`,
    color: `${props.color ? props.color : "#7322C6"}`,
    backgroundColor: `${props.bgColor ? props.bgColor : "#FEFEFE"}`,
  };
  return (
    <Button type="link" style={customButtonLinkStyle}>
      {props.label}
    </Button>
  );
}
