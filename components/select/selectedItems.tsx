import React, { useEffect, useState } from "react";
import { Mode, Option } from ".";
import "./style/select.scss";
interface selectedItemsProps {
  changefunction?: Function;
  selectedItems?: Option[];
  mode?: Mode;
}
const SelectedItems: React.FC<selectedItemsProps> = (props) => {
  const { changefunction, selectedItems, mode } = props;
  const SelectedItems = selectedItems;
  const Delete = (addoption: Option, index: number) => {
    if (addoption.label != "default") {
      if (SelectedItems != undefined) {
        SelectedItems.splice(index, 1);
        //console.log(SelectedItems);
      }
      console.log(addoption);
      changefunction && changefunction(SelectedItems, addoption);
    }
  };
  return (
    <>
      {selectedItems &&
        selectedItems.map((selectedItem, i) => (
          <span
            key={selectedItem.label}
            onClick={() => {
              Delete(selectedItem, i);
            }}
            className="ai-multiple-select"
          >
            {selectedItem.value}
            <span id="ai-x"> x</span>
          </span>
        ))}
    </>
  );
};
export default SelectedItems;
