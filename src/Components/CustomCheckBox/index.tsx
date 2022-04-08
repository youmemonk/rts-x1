import { Checkbox } from "antd";
import React from "react";
import { checkboxProps } from "../types";
// import "./styles.less";

const CustomCheckbox = (checkParamps: checkboxProps) => {
  return (
    <>
      <Checkbox
        // checked={checkParamps.checked}
        disabled={checkParamps.disabled ? checkParamps.disabled : false}
        indeterminate={checkParamps.indeterminate}
        onChange={checkParamps.onChange}
      >
        {checkParamps.label}
      </Checkbox>
    </>
  );
};

export default CustomCheckbox;
