import React from "react";
import "./style/index.scss";
import type { TreeProps } from "./index";
import TreeItem from "./treeItem";
import { handlerClick } from "./index";
const Tree: React.FC<TreeProps> = (props) => {
  const { list, ...restProps } = props;

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
        <div className="ai-tree-node-header-content">
          <div>{list && list[0].label}</div>
        </div>
      </div>
      <div>
        <TreeItem list={list && list[0].children} {...restProps}></TreeItem>
      </div>
    </div>
  );
};

export default Tree;
