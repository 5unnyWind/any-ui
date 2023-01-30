import React, { memo, useState } from "react";
import classNames from "classnames";

interface BaseSwitchProps {
  className?: string; // 接受用户自定义类名
  disabled?: boolean; // 是否开启禁用
  width?: number; // 控制组件大小
  defaultChecked?: boolean; // 控制是否
  activeColor?: [boolean, string, number];
  inactiveColor?: [boolean, string, number];
  activeValue?: string;
  inactiveValue?: string;
  children?: React.ReactNode;
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
  console.log(ischeckout);
  const switchclasses = classNames("switch", className, {
    disabled: disabled,
  });

  const spanclasses = classNames("core", ischeckout ? "on" : "off", {
    disabled: disabled,
  });

  return (
    <div className={switchclasses} onClick={handleClick}>
      <input type="text" />
      <span className={spanclasses}></span>
      <span className="switchValue">
        {activeValue ? activeValue : children}
      </span>
    </div>
  );
};

Switch.defaultProps = {
  disabled: false,
  width: 40,
  defaultChecked: true,
};

export default memo(Switch);
