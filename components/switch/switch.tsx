import React, { memo, useState } from "react";
import classNames from "classnames";

const Switch: React.FC = () => {
  const [ischeckout, setischeckout] = useState(true);
  const handleClick = () => {
    setischeckout(!ischeckout);
  };

  const switchclasses = classNames("switch");
  const spanclasses = classNames("core", ischeckout ? "on" : "off");

  return (
    <div className={switchclasses} onClick={handleClick}>
      <input type="text" />
      <span className={spanclasses}></span>
    </div>
  );
};

export default memo(Switch);
