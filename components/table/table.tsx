import * as React from "react";
import Pagination from "./pagination";
import { useEffect, useMemo, useState, ChangeEvent, FormEvent } from "react";
import { ascSort, descSort, tableFilter } from "./utils";
import FormInput from "./form-input";
import "./style/index.scss";

export interface TableProps {
  dataSource: object[];
  showSorterTooltip?: boolean;
  showFilter?: boolean;
  showHeader?: boolean;
  readonly prefixCls: string;
}

interface FormFields {
  columnName: string;
  filterValue: string | number;
}

const defaultFormFields: FormFields = {
  columnName: "",
  filterValue: "",
};

const Table: React.FC<TableProps> = ({
  dataSource,
  showSorterTooltip,
  showFilter,
  showHeader = true,
  prefixCls = "ai",
}: TableProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isSorter, setIsSorter] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [dataFilterArray, setDataFilterArray] = useState<object[]>(dataSource);
  const [currentTableData, setCurrentTableData] = useState<object[]>();
  const [formFields, setFormFields] = useState(defaultFormFields);

  const PageSize = 10;
  const columnNames = Object.keys(dataSource[0]);
  const { columnName, filterValue } = formFields;

  const tableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return dataSource.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, isSorter]);

  useEffect(() => {
    isFilter
      ? setCurrentTableData(dataFilterArray)
      : setCurrentTableData(tableData);
  }, [dataFilterArray, tableData, isFilter, isSorter]);

  const handleSorter = () => setIsSorter(!isSorter);

  const handleFilter = () => setIsFilter(!isFilter);

  const onFilter = ({ columnName, filterValue }: FormFields) => {
    console.log(tableFilter(filterValue, columnName, dataSource));
    setDataFilterArray(tableFilter(filterValue, columnName, dataSource));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      onFilter({ columnName, filterValue });
    } catch (error) {
      console.error("fail to filter");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      {showFilter ? (
        <form
          onSubmit={handleSubmit}
          className={`${prefixCls}-table-filter-form`}
        >
          <FormInput
            label={"列名"}
            type={"text"}
            required
            onChange={handleChange}
            name={"columnName"}
            value={columnName}
          />
          <FormInput
            label={"筛选值"}
            type={"text"}
            required
            onChange={handleChange}
            name={"filterValue"}
            value={filterValue}
          />
          <button
            className={`${prefixCls}-table-filter-form-button`}
            type={"submit"}
            onClick={handleFilter}
          >
            {isFilter ? "取消" : "筛选"}
          </button>
        </form>
      ) : null}
      <table className={`${prefixCls}-table`}>
        {showHeader && (
          <thead className={`${prefixCls}-table-thead`}>
            <tr className={`${prefixCls}-table-column`}>
              {columnNames!.map((key: string) => {
                if (showSorterTooltip) {
                  const onAscData = () => {
                    ascSort(key, dataSource);
                    handleSorter();
                  };
                  const onDescData = () => {
                    descSort(key, dataSource);
                    handleSorter();
                  };
                  return (
                    <th
                      className={`${prefixCls}-table-column-content`}
                      key={key}
                    >
                      <div className={`${prefixCls}-table-column-sorters`}>
                        <span className={`${prefixCls}-table-column-title`}>
                          {key.replace(/_/g, " ").toUpperCase()}
                        </span>
                        <span className={`${prefixCls}-table-column-sorter`}>
                          <span
                            className={`${prefixCls}-table-column-sorter-inner`}
                          >
                            <span className={"caret-up"} onClick={onAscData}>
                              ˄
                            </span>
                            <span className={"caret-down"} onClick={onDescData}>
                              ˅
                            </span>
                          </span>
                        </span>
                      </div>
                    </th>
                  );
                }
                return (
                  <th className={`${prefixCls}-table-column-content`} key={key}>
                    {key.replace(/_/g, " ").toUpperCase()}
                  </th>
                );
              })}
            </tr>
          </thead>
        )}
        <tbody className={`${prefixCls}-table-tbody`}>
          {currentTableData &&
            currentTableData.map((item: any) => {
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
        totalContent={
          isFilter
            ? (dataFilterArray.length as number)
            : (dataSource.length as number)
        }
        pageSize={PageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </>
  );
};

export default Table;
