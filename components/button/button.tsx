import React from "react";
import classNames from "classnames";

export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default" | "danger" | "link";
export type ButtonShape = "default" | "circle" | "round";

interface BaseButtonProps {
  className: string;
  disabled: boolean;
  size: ButtonSize;
  children: React.ReactNode;
  href: string;
  shape: ButtonShape;
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;

type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;

type fileterPartialType<T, U> = {
  [K in keyof T as K extends U ? never : K]?: T[K] | undefined;
};

export type ButtonProps = fileterPartialType<
  NativeButtonProps & AnchorButtonProps,
  "type"
> & {
  type?: ButtonType;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { disabled, size, children, className, href, type, ...restProps } =
    props;

  const classes = classNames("ai-btn", className, {
    [`ai-btn-${type}`]: type, // btnType 参数存在时则动态添加 `btn-${btnType}` 类
    [`ai-btn-${size}`]: size, // size 参数存在时动态添加 `btn-${size}` 类
    disabled: type === "link" && disabled, // 由于 a 链接原生不带有 disabled 属性，因此需要手动给它添加一个 disabled 类。通过编写类的样式实现disabled效果
  });

  if (type === "link" && href) {
    return (
      <a {...restProps} href={href} className={classes}>
        {children}
      </a>
    );
  } else {
    return (
      <button {...restProps} className={classes} disabled={disabled}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  type: "default",
  shape: "default",
};

export default Button;
