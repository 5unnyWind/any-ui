import React, { useImperativeHandle } from "react";
import FieldContext from "./FieldContext";
import useForm from "./useForm";
import type { Callbacks, FormInstance } from "./interface";

interface FormProps<Values = any> {
  form?: FormInstance<Values>;
  onFinish?: Callbacks<Values>["onFinish"];
  onFinishFailed?: Callbacks<Values>["onFinishFailed"];
  children?: React.ReactNode;
}

const Form: React.FC<FormProps> = (props) => {
  console.log(props);
  const { onFinish, onFinishFailed, form, children, ...others } = props;

  const [formInstance] = useForm(form);
  formInstance.setCallbacks({ onFinish, onFinishFailed });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formInstance.submit();
      }}
    >
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
};

export default Form;
