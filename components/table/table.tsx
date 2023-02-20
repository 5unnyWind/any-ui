import * as React from "react";
import Pagination from "./pagination";
import { useEffect, useMemo, useState } from "react";
import { useFilter } from "./hook/useFilter";
import "./style/index.scss";
import classnames from "classnames";

export interface TableProps {
  dataSource: object[];
  showSorterTooltip?: boolean;
  prefixCls: string;
}

const Table = ({
  dataSource,
  showSorterTooltip,
  prefixCls = "ai",
}: TableProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [columnName, setColumnName] = useState<string[]>(["null"]);
  const [showTableFilter, setShowTableFilter] = useState<boolean>(false);
  const PageSize = 10;

  // const { ascData, descData } = useFilter({ dataSource, target });

  useEffect(() => {
    const tableKeys = Object.keys(dataSource[0]).map((key) => {
      return key.replace(/_/g, " ").toUpperCase();
    });

    if (showSorterTooltip !== undefined) {
      setShowTableFilter(showSorterTooltip);
    }

    setColumnName(tableKeys);
  }, [dataSource]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return dataSource.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <table className={`${prefixCls}-table`}>
        <thead className={`${prefixCls}-table-thead`}>
          <tr className={`${prefixCls}-table-column`}>
            {columnName!.map((key: string) => {
              if (showTableFilter) {
                const target = key;
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const { ascData, descData } = useFilter({ dataSource, target });

                return (
                  <th className={`${prefixCls}-table-column-content`} key={key}>
                    <div className={`${prefixCls}-table-column-sorters`}>
                      <span className={`${prefixCls}-table-column-title`}>
                        {key}
                      </span>
                      <span className={`${prefixCls}-table-column-sorter`}>
                        <span className={"caret-up"} onClick={ascData()}>
                          w
                        </span>
                        <span className={"caret-down"} onClick={descData()}>
                          s
                        </span>
                      </span>
                    </div>
                  </th>
                );
              }

              return (
                <th className={`${prefixCls}-table-column-content`} key={key}>
                  {key}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className={`${prefixCls}-table-tbody`}>
          {currentTableData.map((item: any) => {
            const values = Object.values(item);
            return (
              <tr className={`${prefixCls}-table-container`} key={item.id}>
                {values.map((el: string | number, idx) => (
                  <th className={`${prefixCls}-table-content`} key={idx}>
                    {el}
                  </th>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        cls="pagination-bar"
        siblingCount={1}
        currentPage={currentPage}
        totalContent={dataSource.length as number}
        pageSize={PageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </>
  );
};

export default Table;
