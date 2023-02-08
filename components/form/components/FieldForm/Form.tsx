import React from "react";
import { Store, FormInstance, Callbacks } from "./interface";
import FieldContext, { HOOK_MARK } from "./FieldContext";
import useForm from "./useForm";

type BaseFormProps = Omit<
  React.FormHTMLAttributes<HTMLFormElement>,
  "onSubmit"
>;

type RenderProps = (
  values: Store,
  form: FormInstance
) => JSX.Element | React.ReactNode;

export interface FormProps<Values = any> extends BaseFormProps {
  initialValues?: Store;
  form?: FormInstance<Values>;
  children?: React.ReactNode;
  name?: string;
  onValuesChange?: Callbacks<Values>["onValuesChange"];
  onFieldsChange?: Callbacks<Values>["onFieldsChange"];
  onFinish?: Callbacks<Values>["onFinish"];
  onFinishFailed?: Callbacks<Values>["onFinishFailed"];
  validateTrigger?: string | string[] | false;
  preserve?: boolean;
}

const Form: React.FC<FormProps> = ({
  name,
  initialValues,
  form,
  preserve,
  children,
  onValuesChange,
  onFinish,
  onFinishFailed,
  ...restProps
}: FormProps) => {
  // 由于可能没有传入form，所以这里useForm执行一下
  const [formInstance] = useForm(form);
  const { setCallbacks, setInitialValues } = formInstance as FormInstance;
  // setCallbacks保存用户自定义回调函数
  setCallbacks({
    onFinish,
    onFinishFailed,
    onValuesChange,
  });

  // 设置表单初始值
  setInitialValues(initialValues || {});

  return (
    <form
      {...restProps}
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        formInstance.submit();
      }}
    >
      {/* 把form对象实例透传下去 */}
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
};

export default Form;
