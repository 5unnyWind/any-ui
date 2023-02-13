import { type } from "@testing-library/user-event/dist/type";
import classNames from "classnames";
import { setDefaultResultOrder } from "dns";
import React, { useEffect, useMemo, useState } from "react";
import { consumers } from "stream";
import SelectedItems from "./selectedItems";
import Option from "./selectedItems";
import "./style/select.scss";
// import {Option} from "./selectOption"
export type SelectSize = "lg" | "sm";
export type Mode = "mutiple";
export type Option = {
  label: string | any;
  value: string | number | any;
};
interface SelectProps {
  placeholder?: string;
  options?: Option[];
  disabled?: true | false;
  size?: SelectSize;
  mode?: Mode;
}
const Select: React.FC<SelectProps> = (props) => {
  const { placeholder, options, disabled, size, mode } = props;
  const [showOptions, setshowOptions] = useState(false); //是否打开下拉框
  const [Iconstyles, setIcon] = useState(
    "ai-downangle " + `ai-downangle-${size}`
  ); //下拉框icon改变
  const selectedItem: Option = { label: "default", value: placeholder }; //点击select框
  const selectedItems: Option[] = [{ label: "default", value: placeholder }]; //多选
  const [useselectedItem, setuseSelectedItem] = useState(selectedItem); //更换选择的条目
  const [useselectedItems, setuseSelectedItems] = useState(selectedItems);
  const [IsX, setIsX] = useState(""); //是否有删除标志
  const [Options, setOptions] = useState(options);
  const [isSelect, setisSelect] = useState("true");
  let sdisabled: string;
  if (disabled) sdisabled = "true";
  else sdisabled = "false";
  const selectClick = () => {
    if (mode && useselectedItems.length == 1) {
      useselectedItems.forEach(function (a) {
        if (a.label == "default") setuseSelectedItems([]);
      });
      setisSelect("false");
    }
    if (disabled == false) {
      setshowOptions(!showOptions);
      console.log(disabled);
    }
    if (size != "lg") {
      if (Iconstyles == "ai-upangle") setIcon("ai-downangle");
      else setIcon("ai-upangle");
    } else {
      if (Iconstyles == "ai-upangle ai-upangle-lg") {
        setIcon("ai-downangle ai-downangle-lg");
      } else {
        setIcon("ai-upangle ai-upangle-lg");
      }
    }
  };
  //点击选项
  const optionClick = (option: Option, i: number) => {
    if (mode != "mutiple") {
      setuseSelectedItem(option);
      setshowOptions(!showOptions);
      setIcon("ai-downangle");
      setIsX(" x");
    } else {
      useselectedItems.push(option);
      Options?.splice(i, 1); //删除已选中Option
      setuseSelectedItems(useselectedItems);
      Options && setOptions([...Options]);
    }
  };
  //点击删除
  const Delete = () => {
    setuseSelectedItem({ label: "default", value: placeholder });
    setIsX("");
  };
  //减少已选择
  const ChangeSelectedItems = (selectedItems: Option[], addoption: Option) => {
    setuseSelectedItems(selectedItems);
    console.log(useselectedItems);
    console.log(addoption);
    if (addoption != undefined) Options && Options.push(addoption);
    if (selectedItems.length == 0)
      setuseSelectedItems([{ label: "default", value: placeholder }]);
    // // Options && setOptions([...Options]);
    console.log(Options);
    setshowOptions(true);
  };
  const selectclasses = classNames("ai-select", {
    [`ai-select-${sdisabled}`]: sdisabled, //是否可以使用
    [`ai-select-${size}`]: size, //大小
    // [`ai-select-${isSelect}`]: isSelect, //上面的框里是否有字符串
  });
  const optionclasses = classNames("ai-option", {
    [`ai-select-option-${size}`]: size, //大小
  });
  const optionsclasses = classNames("ai-options", {
    [`ai-options-${size}`]: size, //大小
  });
  const mouseclasses = classNames("ai-mouse", {
    [`ai-mouse-${size}`]: size, //大小
  });
  return (
    <div className="ai-select-container">
      <div className={selectclasses} onClick={selectClick}>
        {mode && (
          <>
            <SelectedItems
              changefunction={ChangeSelectedItems}
              selectedItems={useselectedItems}
            ></SelectedItems>
          </>
        )}
        {!mode && (
          <>
            <span id="ai-select-single">
              {useselectedItem.value}
              <span onClick={Delete} id="ai-select-singleX">
                {IsX}
              </span>
            </span>
            <span className={Iconstyles}></span>
          </>
        )}
      </div>
      {showOptions && (
        <div className={optionsclasses}>
          {Options?.map((Option, i) => (
            <div
              key={Option.label}
              className={optionclasses}
              onClick={() => optionClick(Option, i)}
            >
              <span className={mouseclasses}>{Option.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
Select.defaultProps = {
  disabled: false,
  options: [],
};
export default Select;
