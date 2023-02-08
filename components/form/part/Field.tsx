import React, { ChangeEvent, useLayoutEffect } from "react";
import FieldContext from "./FieldContext";
import type { NamePath, Rule } from "./interface";
import "../style/index.scss";
import classNames from "classnames";
type FiledProps = {
  name: NamePath;
  rules: Rule[];
  children?: React.ReactNode;
  label: NamePath;
};

const Field: React.FC<FiledProps> = (props) => {
  console.log(props);
  const { children, name, label } = props;
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
  function body(children: React.ReactNode) {
    console.log(children);
    return React.Children.map(children, (child) => {
      React.cloneElement(child as React.ReactElement, getControlled());
    });
  }
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
