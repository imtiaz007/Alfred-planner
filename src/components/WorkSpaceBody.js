import React from "react";
import SearchBox from "./SearchBox";
import TaskList from "./TaskList";

const WorkSpaceBody = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="py-3 sticky">
        <SearchBox />
      </div>
      <div className="overflow-x-hidden overflow-y-auto">
        <div className="w-1/3 px-5">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default WorkSpaceBody;
