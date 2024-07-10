import React from "react";
import Button from "./Button";

const Tips7 = () => {
  return (
    <div className="flex gap-3">
      <Button>作成</Button>
      <Button className="bg-red-500">削除</Button>
      <Button className="bg-green-500">保存</Button>
    </div>
  );
};

export default Tips7;
