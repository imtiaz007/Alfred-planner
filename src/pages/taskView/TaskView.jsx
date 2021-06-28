import React from 'react';
import AddTask from '../../components/AddTask';
import TaskList from '../../components/TaskList';

const TaskView = () => (
  <div className="flex flex-col w-full">
    <div className="py-3 sticky">
      <AddTask />
    </div>
    <div className="overflow-x-hidden overflow-y-auto">
      <div className="w-1/3 px-5">
        <TaskList />
      </div>
    </div>
  </div>
);

export default TaskView;
