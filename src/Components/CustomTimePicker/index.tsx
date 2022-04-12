import { TimePicker } from "antd";
import React from "react";
import { timePickerPropsParams } from "../types";
import { useField, useFormik, useFormikContext } from "formik";
import moment from "moment";

const CustomTimePicker = (timeProps: timePickerPropsParams) => {
  //   const context = useFormikContext<datePickerPropsParams>();
  //   const { setFieldValue } = useFormikContext();
  //   const [field] = useField(dateProps)

  return (
    <>
      <TimePicker
        // {...context.getFieldProps(dateProps.formikField)

        size={timeProps.size ? timeProps.size : "middle"}
        use12Hours={timeProps.use12Hours ? timeProps.use12Hours : false}
        showNow={timeProps.showNow ? timeProps.showNow : true}
        onSelect={timeProps.onSelect}
        onChange={timeProps.onChange}
      />
    </>
  );
};

export default CustomTimePicker;
