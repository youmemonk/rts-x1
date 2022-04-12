import { DatePicker } from "antd";
import React from "react";
import { datePickerPropsParams } from "../types";

const CustomDatePicker = (dateProps: datePickerPropsParams) => {
  return (
    <>
      <DatePicker
        dateRender={(current) => {
          return <div>{current.date()}</div>;
        }}
        mode={dateProps.mode ? dateProps.mode : "date"}
        showToday={dateProps.showToday ? dateProps.showToday : true}
        size={dateProps.size ? dateProps.size : "middle"}
        onOk={dateProps.onOK}
      />
    </>
  );
};

export default CustomDatePicker;
