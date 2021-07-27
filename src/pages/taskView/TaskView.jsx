/* eslint-disable arrow-body-style */
import React from 'react';
import TaskList from 'src/organisms/taskList';
import AddTask from '../../organisms/addtask';

const TaskView = () => {
  return (
    <div className='flex flex-col w-full h-full'>
      <div className='w-full sm:w-1/3 sticky'>
        <AddTask />
      </div>
      <div className='w-full sm:w-1/3 overflow-y-auto'>
        <TaskList />
      </div>
    </div>
  );
};

export default TaskView;
