import React from "react";

const BreadcrumbSeparator: React.FC<{
  separator?: React.ReactNode;
}> = (props) => {
  const { separator } = props;
  return <span className="ai-bcb-separator">{separator}</span>;
};

BreadcrumbSeparator.defaultProps = { separator: "/" };

export default BreadcrumbSeparator;
