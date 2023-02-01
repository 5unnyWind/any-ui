import React, { useState } from "react";
import Card from "../card";

const Demo: React.FC = () => {
  return (
    <>
      <Card
        title="123"
        style={{ width: 300 }}
        bordered={true}
        headStyle={{ color: "yellow" }}
        bodyStyle={{ color: "red" }}
      >
        <p>9999</p>
        <p>9999</p>
      </Card>
    </>
  );
};

export default Demo;
