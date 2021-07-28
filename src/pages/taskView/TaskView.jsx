/* eslint-disable arrow-body-style */
import React from 'react';
import { useRecoilValue } from 'recoil';
import { allTagsState } from 'src/constants/stateAtoms';
import DateFilter from 'src/organisms/dateFilter';
import TaskList from 'src/organisms/taskList';
import AddTask from '../../organisms/addtask';

const TaskView = () => {
  const [dateFilterValue, setDateFilterValue] = React.useState('today');
  const allTags = useRecoilValue(allTagsState);
  const [tagFilterValues, setTagFilterValues] = React.useState([allTags[0]]);

  const handleFilterChange = (val) => {
    if (tagFilterValues.includes(val)) {
      const newTagValues = tagFilterValues.filter((tag) => tag !== val);
      setTagFilterValues(newTagValues);
    } else {
      setTagFilterValues((oldValues) => [...oldValues, val]);
    }
  };

  return (
    <div className='flex flex-col w-full h-full'>
      <div className='w-full sm:w-1/3 sticky'>
        <DateFilter
          dateFilterValue={dateFilterValue}
          onDatefilterChange={setDateFilterValue}
        />
        <AddTask
          tagFilterValues={tagFilterValues}
          onTagFilterChange={handleFilterChange}
        />
      </div>
      <div className='w-full sm:w-1/3 overflow-y-auto'>
        <TaskList
          dateFilterValue={dateFilterValue}
          tagFilterValues={tagFilterValues}
        />
      </div>
    </div>
  );
};

export default TaskView;
