import React, { ChangeEvent, useLayoutEffect } from "react";
import FieldContext from "./FieldContext";
import type { NamePath, Rule } from "./interface";
import classNames from "classnames";
import "../../style/index.scss";
type FiledProps = {
  name: NamePath;
  label: NamePath;
  rules: Rule[];
  children: React.ReactNode;
};

const Field: React.FC<FiledProps> = (props) => {
  const { children, name, label } = props;

  console.log(label);
  const { getFieldValue, setFieldsValue, registerFieldEntities } =
    React.useContext(FieldContext);
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  useLayoutEffect(() => {
    const unregister =
      registerFieldEntities &&
      registerFieldEntities({
        props,
        onStoreChange: forceUpdate,
      });
    return unregister;
  }, []);

  const getControlled = () => {
    return {
      value: (getFieldValue && getFieldValue(name, label)) || "",
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e?.target?.value;
        setFieldsValue && setFieldsValue({ [name]: newValue });
      },
    };
  };
  return (
    <>
      <div className={"ai-form-item"}>
        <div className={"ai-form-title"}>{label}</div>
        {React.cloneElement(children as React.ReactElement, getControlled())}
      </div>
    </>
  );
};

export default Field;
