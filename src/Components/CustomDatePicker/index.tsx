import { DatePicker, Space } from "antd";
import React from "react";
import { datePickerPropsParams } from "../types";
import { useField, useFormik, useFormikContext } from "formik";
import moment from "moment";

const CustomDatePicker = (dateProps: datePickerPropsParams) => {
  //   const context = useFormikContext<datePickerPropsParams>();
  //   const { setFieldValue } = useFormikContext();
  //   const [field] = useField(dateProps)

  // Addition to new branch

  return (
    <>
      <DatePicker
        // {...context.getFieldProps(dateProps.formikField)

        mode={dateProps.mode ? dateProps.mode : "date"}
        size={dateProps.size ? dateProps.size : "middle"}
        showToday={dateProps.showToday ? dateProps.showToday : true}
        onOk={dateProps.onOK}
        onChange={dateProps.onChange}
      />
    </>
  );
};

export default CustomDatePicker;
