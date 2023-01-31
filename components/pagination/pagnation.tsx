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
  selectComponentClass,
  showSizeChanger,
  ...restProps
}) => {
  //
  // const {
  //   getPrefixCls,
  //   direction,
  //   pagination = {},
  // } = React.useContext(ConfigContext);
  // const prefixCls = getPrefixCls("pagination", customizePrefixCls);

  // Style

  // const mergedShowSizeChanger = showSizeChanger ?? pagination.showSizeChanger;

  // const getIconsProps = () => {
  //   const ellipsis = <span className={`${prefixCls}-item-ellipsis`}>•••</span>;
  //   let prevIcon = (
  //     <button className={`${prefixCls}-item-link`} type="button" tabIndex={-1}>
  //       <LeftOutlined />
  //     </button>
  //   );
  //   let nextIcon = (
  //     <button className={`${prefixCls}-item-link`} type="button" tabIndex={-1}>
  //       <RightOutlined />
  //     </button>
  //   );
  //   let jumpPrevIcon = (
  //     <a className={`${prefixCls}-item-link`}>
  //       {/* You can use transition effects in the container :) */}
  //       <div className={`${prefixCls}-item-container`}>
  //         <DoubleLeftOutlined className={`${prefixCls}-item-link-icon`} />
  //         {ellipsis}
  //       </div>
  //     </a>
  //   );
  //   let jumpNextIcon = (
  //     <a className={`${prefixCls}-item-link`}>
  //       {/* You can use transition effects in the container :) */}
  //       <div className={`${prefixCls}-item-container`}>
  //         <DoubleRightOutlined className={`${prefixCls}-item-link-icon`} />
  //         {ellipsis}
  //       </div>
  //     </a>
  //   );
  //   // change arrows direction in right-to-left direction
  //   if (direction === "rtl") {
  //     [prevIcon, nextIcon] = [nextIcon, prevIcon];
  //     [jumpPrevIcon, jumpNextIcon] = [jumpNextIcon, jumpPrevIcon];
  //   }
  //   return {
  //     prevIcon,
  //     nextIcon,
  //     jumpPrevIcon,
  //     jumpNextIcon,
  //   };
  // };
  const extendedClassName = classNames("pgn", {}, className);

  return (
    <RcPagination {...restProps} className={extendedClassName} />
    // (contextLocale: any) => {
    //   const locale = { ...contextLocale, ...customLocale };
    //   const isSmall = size === "small" || !!(xs && !size && responsive);
    //   const selectPrefixCls = getPrefixCls(
    //     "select",
    //     customizeSelectPrefixCls
    //   );
    //   const extendedClassName = classNames(
    //     {
    //       [`${prefixCls}-mini`]: isSmall,
    //       [`${prefixCls}-rtl`]: direction === "rtl",
    //     },
    //     className,
    //     hashId
    //   );
    //
    //   return wrapSSR(
    //     <RcPagination
    //       {...getIconsProps()}
    //       {...restProps}
    //       prefixCls={prefixCls}
    //       selectPrefixCls={selectPrefixCls}
    //       className={extendedClassName}
    //       selectComponentClass={
    //         selectComponentClass || (isSmall ? MiniSelect : MiddleSelect)
    //       }
    //       locale={locale}
    //       showSizeChanger={mergedShowSizeChanger}
    //     />
    //   );
    // }
  );
};

if (process.env.NODE_ENV !== "production") {
  Pagination.displayName = "Pagination";
}

export default Pagination;
