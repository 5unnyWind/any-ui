import { useMemo } from "react";

export const LEFT_DOTS = "<";
export const RIGHT_DOTS = ">";

export interface usePaginationProps {
  totalContent: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
}

export interface paginationProps extends usePaginationProps {
  cls: string;
  onPageChange: (page: number) => void;
}

const range = (start: number, end: number): number[] => {
  const length = end - start + 1;

  return Array.from({ length }, (_, idx) => idx + start);
};

export type usePaginationType = (number | string)[];

export const usePagination = ({
  totalContent,
  pageSize,
  siblingCount = 1,
  currentPage,
}: usePaginationProps) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalContent / pageSize);

    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, LEFT_DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, RIGHT_DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [
        firstPageIndex,
        LEFT_DOTS,
        ...middleRange,
        RIGHT_DOTS,
        lastPageIndex,
      ];
    }
  }, [totalContent, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
