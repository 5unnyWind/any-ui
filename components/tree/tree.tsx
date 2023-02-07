import React, { useState } from "react";
import "./style/index.scss";
import type { TreeProps } from "./index";
import TreeItem from "./treeItem";
import { handlerClick } from "./index";
const Tree: React.FC<TreeProps> = (props) => {
  const { list, checkbox, ...restProps } = props;
  const [classes, UseClasses] = useState<string>("false");
  const handleClick = () => {
    UseClasses("indet");
  };

  return (
    <div className="ai-tree-standard">
      <div className="ai-tree-header-first reactive-postion">
        <div className="ai-tree-helper"></div>
        <span
          className="ai-tree-arrow"
          aria-hidden="true"
          role="presentation"
          onClick={handlerClick}
        >
          <svg viewBox="0 0 24 24">
            <path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path>
          </svg>
        </span>
        {checkbox === true && (
          <div
            className="ai-tree-checkbox"
            role="checkbox"
            onClick={handleClick}
          >
            <div
              className={`ai-tree-checkbox-inner ai-tree-checkbox-inner-${classes}`}
              aria-hidden="true"
            >
              <input type="checkbox" className="q-checkbox-native" />
              <div
                className="ai-tree-checkbox__bg"
                style={{
                  backgroundColor:
                    classes === "false" ? "white" : "currentColor",
                }}
              >
                <svg className="ai-tree-svg" viewBox="0 0 24 24">
                  <path
                    className="ai-tree-checkbox__truthy"
                    fill="none"
                    d="M1.73,12.91 8.1,19.28 22.79,4.59"
                  ></path>
                  <path
                    className="ai-tree-checkbox__indet"
                    d="M4,14H20V10H4"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        )}
        <div className="ai-tree-node-header-content">
          <div>{list && list[0].label}</div>
        </div>
      </div>
      <div>
        <TreeItem
          list={list && list[0].children}
          checkbox={checkbox}
          {...restProps}
        ></TreeItem>
      </div>
    </div>
  );
};

export default Tree;
