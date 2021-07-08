import React from "react";
import { useRecoilValue } from "recoil";
import { tasksState } from "src/constants/stateAtoms.js";
import TaskCard from "src/organisms/taskcard/TaskCard.jsx";
import AddTask from "../../organisms/addtask/AddTask.jsx";

const TaskView = () => {
  const tasks = useRecoilValue(tasksState);
  return (
    <div className="flex flex-col w-full">
      <div className="w-full sm:w-1/3 py-3 sticky">
        <AddTask />
      </div>
      <div className="overflow-x-hidden overflow-y-auto">
        <div className="w-full sm:w-1/3 ">
          {tasks.map((task) => (
            <TaskCard
              id={task.id}
              name={task.name}
              tags={task.tags}
              isCompleted={task.isCompleted}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskView;
