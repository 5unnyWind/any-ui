import { InputHTMLAttributes } from "react";
import * as React from "react";
import classnames from "classnames";
import "./style/form-input.scss";

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: React.FC<FormInputProps> = ({ label, ...otherProps }) => {
  const labelCls = classnames({
    ["shrink"]: Boolean(
      otherProps.value &&
        typeof otherProps.value === "string" &&
        otherProps.value.length
    ),
  });
  return (
    <div className={`ai-table-filter-input-group`}>
      <input className={`ai-table-filter-input`} {...otherProps} />
      {label && <label className={labelCls}>{label}</label>}
    </div>
  );
};

export default FormInput;
