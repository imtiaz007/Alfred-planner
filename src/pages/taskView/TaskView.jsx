import React from "react";
import TaskCard from "src/organisms/taskcard/TaskCard.jsx";
import AddTask from "../../components/AddTask.jsx";

const TaskView = () => (
  <div className="flex flex-col w-full">
    <div className="w-full sm:w-1/3 py-3 sticky">
      <AddTask />
    </div>
    <div className="overflow-x-hidden overflow-y-auto">
      <div className="w-full sm:w-1/3 ">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  </div>
);

export default TaskView;
