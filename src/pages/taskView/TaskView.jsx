/* eslint-disable arrow-body-style */
import React from "react";
import TaskList from "src/organisms/taskList";
import AddTask from "../../organisms/addtask";

const TaskView = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full sm:w-1/3 py-3 sticky">
        <AddTask />
      </div>
      <div className="overflow-x-hidden overflow-y-auto">
        <div className="w-full sm:w-1/3 ">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default TaskView;
