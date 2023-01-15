import React from "react";
import Badge from "../index";

const App: React.FC = () => {
  return (
    <>
      <Badge type="default">默认</Badge>
      <Badge type="secondary">次要</Badge>
      <Badge type="success">成功</Badge>
      <Badge type="warning">警告</Badge>
      <Badge type="error">失败</Badge>
      <Badge type="default">35</Badge>
      <Badge type="default" dot />

      <div style={{margin:'20px'}}/>
      
      <Badge.Anchor placement="topRight">
        <Badge type="default">12</Badge>
        <div style={{width:"50px",height:"50px",backgroundColor:'gray',borderRadius:'10px'}}>头像</div>
      </Badge.Anchor>
    </>
  );
};

export default App;
