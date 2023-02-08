import { useRef } from "react";
import {
  Store,
  FormInstance,
  FieldEntity,
  FieldError,
  Callbacks,
} from "./interface";

class FormStore {
  // 用来保存表单数据
  private store: Store = {};

  private fieldEntities: FieldEntity[] = [];

  private initialValues: Store = {};

  private callbacks: Callbacks = {};

  getFieldEntities = (pure: boolean = false) => {
    if (!pure) {
      return this.fieldEntities;
    }

    return this.fieldEntities.filter((field) => field.props.name);
  };

  getFieldValue = (name: string) => this.store[name];

  getFieldsValue = () => this.store;

  setFieldsValue = (values: any, reset?: boolean) => {
    const nextStore = {
      ...this.store,
      ...values,
    };
    this.store = nextStore;
    this.getFieldEntities(true).forEach(({ props, onStoreChange }) => {
      const name = props.name as string;
      Object.keys(values).forEach((key) => {
        if (name === key || reset) {
          onStoreChange();
        }
      });
    });

    const { onValuesChange } = this.callbacks;

    if (onValuesChange) {
      onValuesChange(values, nextStore);
    }
  };

  registerField = (entity: FieldEntity) => {
    this.fieldEntities.push(entity);

    const { name, initialValue } = entity.props;
    // Set initial values
    if (initialValue !== undefined && name) {
      this.initialValues = {
        ...this.initialValues,
        [name]: initialValue,
      };
      this.setFieldsValue({
        ...this.store,
        [name]: initialValue,
      });
    }
    // un-register field callback
    return () => {
      this.fieldEntities = this.fieldEntities.filter((item) => item !== entity);
      // this.store = setValue(this.store, namePath, undefined); // 删除移除字段的值
    };
  };

  resetFields = (nameList?: string[]) => {
    if (!nameList) {
      this.store = { ...this.initialValues };
      this.setFieldsValue(this.store, true);
    }
  };

  validateFields = () => {
    const promiseList: Promise<{
      name: string;
      errors: string[];
    }>[] = [];

    this.getFieldEntities(true).forEach((entity) => {
      const promise = entity.validateRules();
      const { name } = entity.props;
      promiseList.push(
        promise
          .then(() => ({ name, errors: [] }))
          .catch((errors: any) =>
            Promise.reject({
              name,
              errors,
            })
          )
      );
    });

    let hasError = false;
    let count = promiseList.length;
    const results: FieldError[] = [];

    const summaryPromise = new Promise((resolve, reject) => {
      promiseList.forEach((promise, index) => {
        promise
          .catch((e) => {
            hasError = true;
            return e;
          })
          .then((result) => {
            count -= 1;
            results[index] = result;

            if (count > 0) {
              return;
            }

            if (hasError) {
              reject(results);
            }
            resolve(this.getFieldsValue());
          });
      });
    });

    return summaryPromise as Promise<Store>;
  };

  submit = async () => {
    this.validateFields()
      .then((values) => {
        const { onFinish } = this.callbacks;
        if (onFinish) {
          try {
            onFinish(values);
          } catch (err) {
            console.error(err);
          }
        }
      })
      .catch((e) => {
        const { onFinishFailed } = this.callbacks;
        if (onFinishFailed) {
          onFinishFailed(e);
        }
      });
  };

  setInitialValues = (initialValues: Store) => {
    console.log("setInitvalues");
    this.initialValues = initialValues || {};
    this.setFieldsValue(initialValues);
  };

  setCallbacks = (callbacks: Callbacks) => {
    this.callbacks = callbacks;
  };

  getForm = () => {
    return {
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldsValue,
      setFieldsValue: this.setFieldsValue,
      validateFields: this.validateFields,
      registerField: this.registerField,
      submit: this.submit,
      setCallbacks: this.setCallbacks,
      setInitialValues: this.setInitialValues,
      resetFields: this.resetFields,
    };
  };
}

const useForm = (form?: FormInstance) => {
  // 创建一个ref保存表单
  const formRef = useRef<FormInstance>();
  // 防止表单重复创建
  if (!formRef.current) {
    // 如果有传参,ref为传进来的表单，否则创建表单实例对象
    if (form) {
      formRef.current = form;
    } else {
      const formStore = new FormStore();
      formRef.current = formStore.getForm();
    }
  }
  // 返回数组 方便扩展
  return [formRef.current];
};

export default useForm;
