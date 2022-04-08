import { Button, Modal } from "antd";
import React, { ReactNode } from "react";
import CustomButton from "../CustomButton/CustomButtonComponent";
import { modalProps } from "../types";
import "./styles.css";

const CustomModal = (modalProps: modalProps) => {
  return (
    <Modal
      title={modalProps.title?.toUpperCase()}
      visible={modalProps.visible}
      onOk={modalProps.onOk}
      onCancel={modalProps.onCancel}
      footer={false}
      centered={true}
      className="customModal"
    >
      {modalProps.children}

      <div className="button-center">
        <CustomButton onClick={modalProps.onOk} label="Click Me" />
      </div>
    </Modal>
  );
};

export default CustomModal;
