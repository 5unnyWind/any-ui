import { useRef } from "react";
import type {
  Store,
  NamePath,
  Callbacks,
  FormInstance,
  FieldEntity,
} from "./interface";

class FormStore {
  private store: Store = {};
  private callbacks: Callbacks = {};
  private fieldEntities: FieldEntity[] = [];
  private initialValues: Store = {};

  getFieldsValue = () => {
    return { ...this.store };
  };

  getFieldValue = (name: NamePath) => {
    return this.store[name];
  };

  validateField = () => {
    const err: any[] = [];
    this.fieldEntities.forEach((entity) => {
      const { name, rules } = entity.props;
      const value: NamePath = name && this.getFieldValue(name);
      let rule = rules?.length && rules[0];
      if (rule && rule.required && (value === undefined || value === "")) {
        name && err.push({ [name]: rule && rule.message, value });
      }
    });

    return err;
  };
  getFieldEntities = (pure: boolean = false) => {
    if (!pure) {
      return this.fieldEntities;
    }

    return this.fieldEntities.filter((field) => field.props.name);
  };
  setFieldsValue = (values: any, reset?: boolean) => {
    this.store = {
      ...this.store,
      ...values,
    };
    // update Filed
    this.getFieldEntities(true).forEach(({ props, onStoreChange }) => {
      const name = props.name as string;
      Object.keys(values).forEach((key) => {
        if (name === key || reset) {
          onStoreChange();
        }
      });
    });
  };

  setCallbacks = (callbacks: Callbacks) => {
    this.callbacks = { ...this.callbacks, ...callbacks };
  };

  // 订阅与取消订阅
  registerFieldEntities = (entity: FieldEntity) => {
    this.fieldEntities.push(entity);
    return () => {
      this.fieldEntities = this.fieldEntities.filter((item) => item !== entity);
      const { name } = entity.props;
      name && delete this.store[name];
    };
  };

  submit = () => {
    const { onFinish, onFinishFailed } = this.callbacks;
    const err = this.validateField();
    if (err.length === 0) {
      onFinish && onFinish(this.getFieldsValue());
    } else {
      onFinishFailed && onFinishFailed(err);
    }
  };
  resetFields = (nameList?: string[]) => {
    if (!nameList) {
      this.store = { ...this.initialValues };
      this.setFieldsValue(this.store, true);
    }
  };

  getForm = (): FormInstance => {
    return {
      getFieldsValue: this.getFieldsValue,
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
      submit: this.submit,
      setCallbacks: this.setCallbacks,
      registerFieldEntities: this.registerFieldEntities,
      resetFields: this.resetFields,
    };
  };
}

export default function useForm<Values = any>(
  form?: FormInstance<Values>
): [FormInstance<Values>] {
  const formRef = useRef<FormInstance>();
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const formStore = new FormStore();
      formRef!.current = formStore.getForm();
    }
  }
  return [formRef.current];
}
