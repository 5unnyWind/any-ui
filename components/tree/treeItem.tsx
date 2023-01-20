import React from "react";
import type { TreeProps } from "./index";

const TreeItem: React.FC<TreeProps> = (props) => {
  const { list, ...restProps } = props;

  const changeParent = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget.parentNode?.nextSibling as HTMLElement).style.display =
      (e.currentTarget.parentNode?.nextSibling as HTMLElement).style.display ===
      "block"
        ? "none"
        : "block";
  };

  const handlerClick = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.className =
      e.currentTarget.className === "ai-tree-arrow"
        ? "ai-tree-arrow ai-tree-arrow-rotate"
        : "ai-tree-arrow";
    changeParent(e);
  };

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
                  <div className="ai-tree-node-header-content">
                    <div>{item.label}</div>
                  </div>
                </div>
                <div style={{ display: "none" }}>
                  <TreeItem
                    list={list[index].children}
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
