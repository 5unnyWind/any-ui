//@ts-nocheck
import React, { memo, useState } from "react";
import classNames from "classnames";

interface BaseSwitchProps {
  className?: string; // 接受用户自定义类名
  disabled?: boolean; // 是否开启禁用
  width?: string; // 控制组件大小
  defaultChecked?: boolean; // 控制是否
  activeColor?: string; //控制打开颜色
  inactiveColor?: string; //控制关闭颜色
  activeValue?: string; //打开值
  inactiveValue?: string; //关闭值
  children?: React.ReactNode; //传入子
}

const Switch: React.FC<BaseSwitchProps> = (props) => {
  const {
    disabled,
    className,
    width,
    defaultChecked,
    activeColor,
    inactiveColor,
    activeValue,
    inactiveValue,
    children,
  } = props;

  const [ischeckout, setischeckout] = useState(defaultChecked);

  const handleClick = () => {
    if (!disabled) {
      setischeckout(!ischeckout);
    }
  };

  const switchclasses = classNames("switch", className, {
    disabled: disabled,
  });

  const spanClasses = classNames("core", ischeckout ? "on" : "off", {
    disabled: disabled,
  });

  const spanValueClasses = classNames("switchValue", ischeckout ? "on" : "off");

  return (
    <div
      className={switchclasses}
      style={{
        "--width": `${width}px`,
        "--activeColor": `${activeColor}`,
        "--inactiveColor": `${inactiveColor}`,
      }}
    >
      <input className="switchInput" type="text" />
      <span className={spanClasses} onClick={handleClick}></span>
      <span className={spanValueClasses}>
        <span>
          {activeValue && ischeckout
            ? activeValue
            : inactiveValue && !ischeckout
            ? inactiveValue
            : children}
        </span>
      </span>
    </div>
  );
};

Switch.defaultProps = {
  disabled: false,
  width: "40",
  activeColor: "rgb(22, 119, 255)",
  inactiveColor: "rgb(191, 191, 191)",
  defaultChecked: true,
};

export default memo(Switch);
