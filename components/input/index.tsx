import classNames from "classnames";
import React, { useRef, useState } from "react";
import "./style/index.scss";

interface BaseInputPorps {
  fill?: boolean;
  bgColor?: string;
  outlined?: boolean;
  label?: string;
  stucky?: boolean;
  placeholder?: string;
}

type NativeInputProps = BaseInputPorps & React.InputHTMLAttributes<HTMLElement>;

type InputTypes = Partial<NativeInputProps>;

const Input: React.FC<InputTypes> = (props) => {
  const { label, stucky, placeholder, outlined } = props;

  const labelRef = useRef<HTMLLabelElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const getClassNames = (float: boolean, highlighted: boolean) =>
    classNames({
      ["ai-field-labeld"]: label,
      ["ai-field-float"]: float || stucky,
      ["ai-field-highlighted"]: highlighted,
      ["ai-input-outline"]: outlined,
    });

  const [classes, UseClasses] = useState<string>(
    getClassNames(stucky || false, false)
  );

  const handleClick = () => {
    if (labelRef.current && inputRef.current) {
      inputRef.current.placeholder = placeholder || "";
      UseClasses(getClassNames(true, true));
    }
  };

  const handleBlur = () => {
    if (labelRef.current && inputRef.current) {
      inputRef.current.placeholder = "";
      UseClasses(
        getClassNames(
          inputRef.current?.value.length === 0 ? false : true,
          false
        )
      );
    }
  };

  return (
    <>
      <label
        ref={labelRef}
        className={`ai-input-container ${classes}`}
        htmlFor="ai-input"
      >
        <div className="ai-input-inner">
          <div className="ai-input-control">
            <div className="ai-input-control-container">
              <input
                ref={inputRef}
                type="text"
                className="ai-input-native"
                id="ai-input"
                onFocus={handleClick}
                onBlur={handleBlur}
              />
              <div className="ai-field-label">{label}</div>
            </div>
          </div>
        </div>
      </label>
    </>
  );
};

export default Input;
