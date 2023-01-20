import React from "react";
import type { TreeProps } from "./index";

const TreeItem: React.FC<TreeProps> = (props) => {
  const { list, ...restProps } = props;

  return (
    <>
      {list?.map((item, index) => {
        return (
          <div key={index} className="ai-tree-collapside">
            <div className="ai-tree-children">
              <div
                className={`reactive-postion ai-tree-node-parent ${
                  index == list.length - 1
                    ? "ai-tree-node-last"
                    : "ai-tree-node"
                }`}
              >
                <div className="ai-tree-header">
                  <div className="ai-tree-helper"></div>
                  {list[index].children ? (
                    <span
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
                  <div className="ai-tree-node-header-content">
                    <div>{item.label}</div>
                  </div>
                </div>
                <TreeItem list={list[index].children} {...restProps}></TreeItem>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TreeItem;
