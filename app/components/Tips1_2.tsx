import React from "react";

const Tips1_2 = () => {
  return (
    <div className="flex gap-4">
      <div className="peer group cursor-pointer grid place-items-center h-40 w-40 bg-blue-400 hover:bg-purple-400">
        <div className="h-10 w-10 bg-black group-hover:bg-red-600"></div>
        <div className="h-10 w-10 bg-black group-hover:bg-blue-600"></div>
      </div>

      <div className="h-40 w-40 bg-green-400 peer-hover:bg-orange-500"></div>
    </div>
  );
};

export default Tips1_2;
