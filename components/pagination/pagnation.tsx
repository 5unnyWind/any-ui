import classNames from "classnames";
import * as React from "react";
import type {
  PaginationProps as PaginationPropsType,
  PaginationLocale,
} from "rc-pagination";
import RcPagination from "rc-pagination";

export interface PaginationProps extends PaginationPropsType {
  size?: "default" | "small";
}

export type PaginationPosition = "top" | "bottom";

export interface PaginationConfig extends PaginationProps {
  position?: PaginationPosition;
}

export type { PaginationLocale };

const Pagination: React.FC<PaginationProps> = ({
  prefixCls: customizePrefixCls,
  selectPrefixCls: customizeSelectPrefixCls,
  className,
  size,
  locale: customLocale,
  ...restProps
}) => {
  const extendedClassName = classNames("pgn", {}, className);

  return <RcPagination {...restProps} className={extendedClassName} />;
};

if (process.env.NODE_ENV !== "production") {
  Pagination.displayName = "Pagination";
}

export default Pagination;
