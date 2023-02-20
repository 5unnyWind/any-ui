import * as React from "react";
import Pagination from "./pagination";
import { useEffect, useMemo, useState } from "react";
import { useFilter } from "./hook/useFilter";
import "./style/index.scss";

const Table = ({ dataSource, showSorterTooltip }: any) => {
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
      <table>
        <thead>
          <tr>
            {columnName!.map((key: string) => {
              if (showTableFilter) {
                const target = key
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const { ascData, descData } = useFilter({ dataSource, target });

                return (<th key={key}>
                  <div className={"table-column-sorters"}>
                    <span className={"table-column-title"}>{key}</span>
                    <span className={"table-column-sorter"}>
                      <span className={"caret-up"} onClick={ascData()}>w</span>
                      <span className={"caret-down"} onClick={descData()}>s</span>
                    </span>
                  </div>
                </th>)
              }

              return <th key={key}>{key}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item: any) => {
            const values = Object.values(item);
            return (
              <tr key={item.id}>
                {values.map((el: string | number, idx) => (
                  <th key={idx}>{el}</th>
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
