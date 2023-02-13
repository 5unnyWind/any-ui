import Select, { Option } from "..";
import React from "react";
const options: Option[] = [
  {
    label: "audi",
    value: "123audi",
  },
  {
    label: "motor",
    value: "moter456",
  },
  {
    label: "bicycle",
    value: "789bicycle",
  },
];
const options2: Option[] = [
  {
    label: "orange",
    value: "orange",
  },
  {
    label: "banana",
    value: "banana",
  },
  {
    label: "apple",
    value: "apple",
  },
];
export default function App() {
  return (
    <div>
      <Select
        placeholder={"choose a fruit"}
        options={options2}
        mode="mutiple"
      ></Select>
      {/* <Select  placeholder={"请选择一个对象"} options = {options}></Select>
            <Select  placeholder={"choose a fruit"} options = {options2} mode="mutiple"></Select>
            <Select  placeholder={"choose a fruit"} options = {options2} disabled></Select>
            <Select  placeholder={"choose a fruit"} options = {options2} size = "lg"></Select>
            <Select  placeholder={"choose a fruit"} options = {options2} size = "sm"></Select> */}
    </div>
  );
}
