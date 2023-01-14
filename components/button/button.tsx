import React from "react";
import classNames from "classnames";

export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default" | "danger" | "link";

interface BaseButtonProps {
  className: string;
  disabled: boolean;
  size: ButtonSize;
  btnType: ButtonType;
  children: React.ReactNode;
  href: string;
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
  const { btnType, disabled, size, children, className, href, ...restProps } =
    props;

  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType, // btnType 参数存在时则动态添加 `btn-${btnType}` 类
    [`btn-${size}`]: size, // size 参数存在时动态添加 `btn-${size}` 类
    disabled: btnType === "link" && disabled, // 由于 a 链接原生不带有 disabled 属性，因此需要手动给它添加一个 disabled 类。通过编写类的样式实现disabled效果
  });

  if (btnType === "link" && href) {
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
  btnType: "default",
};

export default Button;
