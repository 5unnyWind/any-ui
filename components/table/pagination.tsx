import classNames from "classnames";
import * as React from "react";
import {
  LEFT_DOTS,
  paginationProps,
  RIGHT_DOTS,
  usePagination,
} from "./hook/usePagination";
import "./style/pagination.scss";

const Pagination: React.FC<paginationProps> = ({
  cls,
  onPageChange,
  currentPage,
  pageSize,
  totalContent,
  siblingCount = 1,
}: paginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalContent,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange!.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrev = () => {
    onPageChange(currentPage - 1);
  };

  const onJumpNext = () => {
    onPageChange(currentPage + 5);
  };

  const onJumpPrev = () => {
    onPageChange(currentPage - 5);
  };

  const lastPage = paginationRange![paginationRange!.length - 1];

  return (
    <ul className={classNames("ai-pagination-container", { [cls]: cls })}>
      <li
        className={classNames("ai-pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrev}
      >
        <div className="arrow left" />
      </li>
      {paginationRange!.map((pageNumber, idx) => {
        if (pageNumber === LEFT_DOTS) {
          return (
            <li
              className="ai-pagination-item ai-pagination-link left-dots"
              onClick={onJumpPrev}
            >
              •••
            </li>
          );
        }
        if (pageNumber === RIGHT_DOTS) {
          return (
            <li
              className="ai-pagination-item ai-pagination-link right-dots"
              onClick={onJumpNext}
            >
              •••
            </li>
          );
        }

        return (
          <li
            key={paginationRange![idx]}
            className={classNames("ai-pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() =>
              onPageChange(typeof pageNumber === "number" ? pageNumber : idx)
            }
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classNames("ai-pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
