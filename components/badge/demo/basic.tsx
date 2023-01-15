import React from "react";
import Badge from "../badge";

const App: React.FC = () => {
  return (
    <>
      <Badge type="default">默认</Badge>
      <Badge type="secondary">次要</Badge>
      <Badge type="success">成功</Badge>
      <Badge type="warning">警告</Badge>
      <Badge type="error">失败</Badge>
      <Badge type="default">35</Badge>
      <Badge type="default" dot/>
    </>
  );
};

export default App;
