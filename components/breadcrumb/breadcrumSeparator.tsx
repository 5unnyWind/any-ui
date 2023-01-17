import React from "react";

const breadcrumSeparator: React.FC<{
  separator?: string;
}> = (props) => {
  const { separator } = props;
  return (
    <>
      <span className="bcb-separator">{separator ? separator : "/"}</span>
    </>
  );
};

export default breadcrumSeparator;
