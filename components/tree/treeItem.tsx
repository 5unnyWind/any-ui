import React, { useState } from "react";
import type { TreeProps, ListItem } from "./index";
import { handlerClick } from "./index";

const TreeItem: React.FC<TreeProps> = (props) => {
  const { list, checkbox, handleParent, parentStatus, ...restProps } = props;

  const [classes, UseClasses] = useState<ListItem[]>(list!);
  const handleClick = (_: any, index: number, status?: boolean) => {
    const temp = classes.map((item, key) => {
      if (key === index) {
        if (status) {
          item.check = status;
        } else if (parentStatus) {
          item.check = false;
        } else {
          item.check = item.check ? false : true;
        }
      } else {
        if (parentStatus) {
          item.check = true;
        }
      }
      return item;
    });
    UseClasses(temp);
    if (handleParent) {
      if (classes.every((item) => item.check === true)) {
        handleParent(_, true);
      } else {
        if (parentStatus) {
          handleParent(_, false);
        }
      }
    }
  };

  return (
    <>
      {list?.map((item, index) => {
        return (
          <div key={index} className="ai-tree-collapside">
            <div className="ai-tree-children">
              <div
                className={`reactive-postion ai-tree-node-parent ${
                  index === list.length - 1
                    ? "ai-tree-node-last"
                    : "ai-tree-node"
                }`}
              >
                <div className="ai-tree-header">
                  <div className="ai-tree-helper"></div>
                  {list[index].children ? (
                    <span
                      onClick={handlerClick}
                      className="ai-tree-arrow"
                      aria-hidden="true"
                      role="presentation"
                    >
                      <svg viewBox="0 0 24 24">
                        <path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path>
                      </svg>
                    </span>
                  ) : (
                    <></>
                  )}
                  {checkbox === true && (
                    <div
                      className="ai-tree-checkbox"
                      role="checkbox"
                      onClick={(e) => handleClick(e, index)}
                      aria-hidden="true"
                    >
                      <div
                        className={`ai-tree-checkbox-inner ai-tree-checkbox-inner-${
                          parentStatus === true
                            ? "truthy"
                            : classes[index].check
                            ? "truthy"
                            : "false"
                        }`}
                        aria-hidden="true"
                      >
                        <input type="checkbox" className="q-checkbox-native" />
                        <div
                          className="ai-tree-checkbox__bg"
                          style={{
                            backgroundColor:
                              parentStatus === true
                                ? "currentColor"
                                : classes[index].check
                                ? "currentColor"
                                : "white",
                          }}
                        >
                          <svg className="ai-tree-svg" viewBox="0 0 24 24">
                            <path
                              className="ai-tree-checkbox__truthy"
                              fill="none"
                              d="M1.73,12.91 8.1,19.28 22.79,4.59"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="ai-tree-node-header-content">
                    <div>{item.label}</div>
                  </div>
                </div>
                <div style={{ display: "none" }}>
                  <TreeItem
                    list={list[index].children}
                    checkbox={checkbox}
                    handleParent={(e: any, status: boolean) => {
                      handleClick(e, index, status);
                    }}
                    parentStatus={parentStatus || list[index].check}
                    {...restProps}
                  ></TreeItem>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TreeItem;
