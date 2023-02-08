import React, { Component } from "react";
import FieldContext from "./FieldContext";
import "../../style/index.scss";
import {
  EventArgs,
  FieldEntity,
  FormInstance,
  Rule,
  InternalFormInstance,
} from "./interface";
import { validateRules } from "./utils/validateUtil";

interface ChildProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [name: string]: any;
}

export interface InternalFieldProps<Values = any> {
  children?:
    | React.ReactElement
    | ((control: ChildProps, form: FormInstance<Values>) => React.ReactNode);
  /**
   * Set up `dependencies` field.
   * When dependencies field update and current field is touched,
   * will trigger validate rules and render.
   */
  name?: string;
  rules?: Rule[];
  initialValue?: any;
  onReset?: () => void;
}

export interface FieldProps<Values = any>
  extends Omit<InternalFieldProps<Values>, "name"> {
  name?: string;
}

class Field
  extends Component<InternalFieldProps, InternalFormInstance>
  implements FieldEntity
{
  // 指定this.context 等于FieldContext.Provider传递过来的form实例对象
  public static contextType = FieldContext;

  private cancelRegister: any;

  private validatePromise: Promise<string[]> | null = null;

  componentDidMount() {
    const { registerField } = this.context;
    this.cancelRegister = registerField(this);
  }

  componentWillUnmount() {
    this.cancelRegister && this.cancelRegister();
  }

  onStoreChange = () => {
    //值改变调用react的forceUpdate重新render，因为数据不是响应式的
    this.forceUpdate();
  };

  validateRules = () => {
    const { rules, name } = this.props;
    if (!name || !rules || !rules.length) return [];
    const cloneRule: any = [...rules];
    const { getFieldValue } = this.context;
    const value = getFieldValue(name);

    const promise = validateRules(name, value, cloneRule);

    promise
      .catch((e) => e)
      .then(() => {
        if (this.validatePromise === promise) {
          this.validatePromise = null;
          this.onStoreChange();
        }
      });

    return promise;
  };

  getControled = () => {
    const { name } = this.props;
    const { getFieldValue, setFieldsValue } = this.context;
    return {
      value: getFieldValue(name),
      onChange: (...args: EventArgs) => {
        const event = args[0];
        if (event && event.target && name) {
          setFieldsValue({
            [name]: (event.target as HTMLInputElement).value,
          });
        }
      },
    };
  };
  // return (
  //   <>
  //     <div  className={"ai-form-item"}>
  //       <div className={"ai-form-title"}>{label}</div>
  //       {React.cloneElement(children as React.ReactElement, getControlled())}
  //     </div>
  //   </>
  // )
  render() {
    const { children } = this.props;
    // 为form.item附加上form中的属性
    const returnChildNode = React.cloneElement(
      children as React.ReactElement,
      this.getControled()
    );
    return (
      <div className={"ai-form-item"}>
        <div className={"ai-form-title"}></div>
        {returnChildNode}
      </div>
    );
  }
}

export default Field;
