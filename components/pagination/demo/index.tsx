import * as React from "react";
import Pagination from "../pagnation";

export const PaginationDemo: React.FC = () => {
  return (
    <>
      <Pagination total={500} />
      <Pagination total={500} simple />
    </>
  );
};

export default PaginationDemo;
