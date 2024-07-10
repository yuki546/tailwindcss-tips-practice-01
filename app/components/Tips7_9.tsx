import React from "react";
import Button from "./Button";

const Tips7 = () => {
  return (
    <div className="flex gap-3">
      <Button variant="secondary">作成</Button>
      <Button variant="primary">削除</Button>
      <Button variant="danger">保存</Button>
      <Button size={"sm"} className="hover:bg-orange-500">編集</Button>
    </div>
  );
};

export default Tips7;
