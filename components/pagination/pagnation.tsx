import * as React from "react";
import type {
  PaginationProps as PaginationPropsType,
  PaginationLocale,
} from "rc-pagination";
import RcPagination from "rc-pagination";
import classnames from "classnames";

const DOST = "•••";

export interface PaginationProps extends PaginationPropsType {
  size?: "default" | "small";
}

export type PaginationPosition = "top" | "bottom";

export interface PaginationConfig extends PaginationProps {
  position?: PaginationPosition;
}

export type { PaginationLocale };

const defaultPaginationConfig: PaginationConfig = {
  defaultCurrent: 1,
  defaultPageSize: 10,
  disabled: false,
  size: "default",
  position: "bottom",
};

const Pagination: React.FC<PaginationConfig> = ({
  prefixCls = "ai-pagination",
  size,
  position,
  ...restProps
} = defaultPaginationConfig) => {
  const extendedClassName = classnames({
    [`ai-pagination-${size}`]: size,
    [`ai-pagination-${position}`]: position,
  });

  const getIcon = () => {
    const prevEllipsis = <span className={`${prefixCls}-icon`}>＜</span>;
    const nextEllipsis = <span className={`${prefixCls}-icon`}>＞</span>;
    const ellipsis = (
      <span className={`${prefixCls}-item-ellipsis`}>{DOST}</span>
    );
    const prevIcon = (
      <button
        className={`${prefixCls}-item-link`}
        type={"button"}
        tabIndex={-1}
      >
        {prevEllipsis}
      </button>
    );

    const nextIcon = (
      <button
        className={`${prefixCls}-item-link`}
        type={"button"}
        tabIndex={-1}
      >
        {nextEllipsis}
      </button>
    );

    const jumpPrevIcon = (
      <a className={`${prefixCls}-item-link`}>
        <div className={`${prefixCls}-item-container`}>{ellipsis}</div>
      </a>
    );

    const jumpNextIcon = (
      <a className={`${prefixCls}-item-link`}>
        <div className={`${prefixCls}-item-container`}>{ellipsis}</div>
      </a>
    );

    return {
      prevIcon,
      nextIcon,
      jumpPrevIcon,
      jumpNextIcon,
    };
  };

  return (
    <RcPagination
      {...getIcon()}
      {...restProps}
      prefixCls={prefixCls}
      className={extendedClassName}
    />
  );
};

if (process.env.NODE_ENV !== "production") {
  Pagination.displayName = "Pagination";
}

export default Pagination;
