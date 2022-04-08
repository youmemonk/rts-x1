import React, {
  ChangeEventHandler,
  ReactChild,
  ReactChildren,
  ReactNode,
} from "react";
import { ActionMeta, MultiValue, SingleValue } from "react-select";
import { JsxChild, JsxElement } from "typescript";
import { boolean } from "yup";
import { MouseEvent } from "react";

export interface payloadParams {
  url?: string;
  body?: object;
  params?: object;
}

export interface buttonPropsParams {
  type:
    | "link"
    | "text"
    | "ghost"
    | "default"
    | "primary"
    | "dashed"
    | undefined;
  htmlType: "button" | "submit" | "reset" | undefined;
  label: string | "";
}

//! Button
export interface buttonParams {
  type?: "text" | "ghost" | "default" | "primary" | "dashed" | undefined;
  htmlType?: "button" | "submit" | "reset" | undefined;
  label: string | "";
  disabled?: boolean;
  size?: "small" | "middle" | "large";
  // onClick: ((event: any) => void) | undefined;
  onClick: ((event: MouseEvent<HTMLInputElement>) => void) | undefined;
  shape?: "default" | "circle" | "round";
}

//! Button Link
export interface linkButtonProps {
  type?: "text" | "link" | "ghost" | undefined;
  htmlType?: "button" | "submit" | "reset" | undefined;
  label: string | "";
  disabled?: boolean;
  size?: "large" | "middle" | "small";
  onClick: (event: any) => void;
}

//! Checkbox
export interface checkboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  label: string | "";
  onChange: (event: any) => void;
}

//! Radio
export interface radioProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  value: any;
  label?: string | "";
}

//! Radio Group : inactive
export interface radioGroupProps {
  defaultValue?: any;
  disabled?: boolean;
  size?: "small" | "middle" | "large";
  value: any;
  options:
    | string[]
    | number[]
    | Array<{ label: string; value: string; disabled?: boolean }>;
  optionType: "default" | "button";
  onChange: (event: any) => void;
}

//! Modal
export interface modalProps {
  footer?: ReactNode;
  title?: string | "";
  visible?: boolean;
  onOk?: (e: any) => void;
  onCancel?: (close: any) => void;
  children?: JSX.Element | JSX.Element[];
}

//! switch
export interface switchPropsParams {
  switchParam1: string | "";
  switchParam2: string | "";
  onClick: ((event: MouseEvent<HTMLInputElement>) => void) | undefined;
  subClass1: "normal" | "highlighted";
  subClass2: "normal" | "highlighted";
  size?: "small" | "middle" | "large";
}

export interface formik {
  initialValues: {};
  validationSchema: {};
  handleSubmit: Function;
}
export interface customFormGroupProps {
  labelName: string;
  placeholder: string;
  onChange: ChangeEventHandler;
}

export interface optionType {
  value: string;
  label: string;
}

export interface selectInputPropsParams {
  defaultValue?: optionType;
  "aria-label"?: string;
  autoFocus?: boolean;
  width?: string | number;
  id: string;
  name: string;
  options: Array<optionType>;
  placeholder?: string;
  onChange: (
    newValue: SingleValue<string | optionType>,
    actionMeta: ActionMeta<string | optionType>
  ) => void;
  value: SingleValue<optionType | string>;
}

export interface inputPropsParams {
  defaultValue?: string;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  id: string;
  name: string;
  size: "small" | "middle" | "large";
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export interface loaderPropsParams {
  delay?: number;
  size: "small" | "default" | "large";
  tip?: ReactNode;
}

export interface multiSelectInputPropsParams {
  "aria-label"?: string;
  autoFocus?: boolean;
  id: string;
  name: string;
  options: Array<optionType>;
  placeholder?: string;
  onChange: (
    value: MultiValue<string | optionType>,
    actionMeta: ActionMeta<string | optionType>
  ) => void;
  value: ReadonlyArray<string | optionType>;
}
