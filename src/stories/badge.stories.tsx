import React from "react";
import { Badge } from "@";
// export default {
//   title: "Components / Badge",
// };

export const Basic  = () => (
  <>
    <h2>徽标</h2>
    <Badge type="default">默认</Badge>
    <Badge type="secondary">次要</Badge>
    <Badge type="success">成功</Badge>
    <Badge type="warning">警告</Badge>
    <Badge type="error">失败</Badge>
    <Badge type="default">35</Badge>
    <Badge type="default" dot />
  </>
);



export const anchor = () => (
  <>
    <h2>锚定徽标</h2>
    <Badge.Anchor placement="topRight">
      <Badge type="default">12</Badge>
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "gray",
          borderRadius: "10px",
        }}
      >
        头像
      </div>
    </Badge.Anchor>
  </>
);
