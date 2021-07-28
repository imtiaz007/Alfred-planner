/* eslint-disable arrow-body-style */
import React from 'react';
import DateFilter from 'src/organisms/dateFilter';
import TaskList from 'src/organisms/taskList';
import AddTask from '../../organisms/addtask';

const TaskView = () => {
  const [dateFilterValue, setDateFilterValue] = React.useState('today');
  return (
    <div className='flex flex-col w-full h-full'>
      <div className='w-full sm:w-1/3 sticky'>
        <DateFilter
          dateFilterValue={dateFilterValue}
          onDatefilterChange={setDateFilterValue}
        />
        <AddTask />
      </div>
      <div className='w-full sm:w-1/3 overflow-y-auto'>
        <TaskList dateFilterValue={dateFilterValue} />
      </div>
    </div>
  );
};

export default TaskView;
