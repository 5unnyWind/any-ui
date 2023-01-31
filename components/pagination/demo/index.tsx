import * as React from "react";
import Pagination from "../pagnation";

export const PaginationDemo: React.FC = () => {
  return (
    <Pagination
      total={5}
      current={2}
      prevIcon={"<"}
      nextIcon={">"}
      jumpPrevIcon={"<<"}
      jumpNextIcon={">>"}
    />
  );
};

export default PaginationDemo;
