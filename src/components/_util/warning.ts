import rcWarning, { resetWarned } from "rc-util/lib/warning";

// 重置警告内容
export { resetWarned };
export function noop() {}

type Warning = (valid: boolean, component: string, message?: string) => void;

let warning: Warning = noop;

// 警告提示
if (process.env.NODE_ENV !== "production") {
  warning = (valid, component, message) => {
    rcWarning(valid, `[anyUI: ${component}] ${message}`);
    if (process.env.NODE_ENV === "test") {
      resetWarned();
    }
  };
}

export default warning;
