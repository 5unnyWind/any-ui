import React from "react";

const breadcrumSeparator: React.FC<{
  separator?: string;
}> = (props) => {
  const { separator } = props;
  return (
    <>
      <span className="breadcrum-separator">{separator ? separator : "/"}</span>
    </>
  );
};

export default breadcrumSeparator;
