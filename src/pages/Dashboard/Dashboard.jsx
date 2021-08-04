import React, { useState, useEffect } from 'react';
import { DoneAll as TasksIcon, Timer as TimeIcon } from '@icons';
import TagStatus from './components/TagStatus';
import TaskView from '../taskView';
import { useRecoilValue } from 'recoil';
import { tasksState, totalTimeWorked } from 'src/constants/stateAtoms';

const Dashboard = () => {
  const allTasks = useRecoilValue(tasksState);
  const totalTimeWorkedValue = useRecoilValue(totalTimeWorked);
  const [completedTaskCount, setTaskCount] = useState(0);
  const [tagStatsCard, setTagStats] = useState([]);

  useEffect(() => {
    const value = allTasks.filter((task) => task.isCompleted).length;
    setTaskCount(value);
    let tags = allTasks.map((task) => task.tags.map((tag) => tag.value)).flat();
    tags = [...new Set(tags)];
    let result = [];
    for (let tagName of tags) {
      const tagTasks = allTasks.filter(({ tags }) =>
        tags.map((tag) => tag.value).includes(tagName)
      );
      const completed = tagTasks.filter((task) => task.isCompleted).length;
      const total = tagTasks.length;
      const statusPercent = (completed / total) * 100 + '%';
      const pending = total - completed;
      result.push({ tagName, statusPercent, pending });
    }
    setTagStats(result);
  }, [allTasks]);

  return (
    <div className='flex'>
      <div className='w-full sm:w-2/3 flex-none flex flex-col py-5 px-0 sm:p-5 space-y-12 overflow-y-auto'>
        <div className='flex space-x-5'>
          {/* Total No of tasks completed | Total No of minutes Worked */}
          <div className='w-1/7 space-y-2 pb-3 bg-background-800 rounded-xl shadow-md'>
            <div className='flex items-center justify-center w-10 -mt-5 ml-5 rounded-lg bg-primary-500 text-text-200 px-2 py-1'>
              <TimeIcon fontSize='large' />
            </div>
            <div className='px-5'>
              <p className='text-text-300 text-5xl  font-bold'>
                {totalTimeWorkedValue}
                <span className='text-sm text-text-100  font-medium'>Mins</span>
              </p>
              <p className='text-text-300 text-lg text-opacity-25'>
                Of Quality Work
              </p>
            </div>
          </div>
          <div className='w-1/7 space-y-2 pb-3 bg-background-800 rounded-xl shadow-md'>
            <div className='flex items-center justify-center w-10 -mt-5 ml-5 rounded-lg bg-primary-500 text-text-200 px-2 py-1'>
              <TasksIcon fontSize='large' />
            </div>
            <div className='px-5'>
              <p className='text-text-300 text-5xl font-bold'>
                {completedTaskCount}
              </p>
              <p className='text-text-300 text-lg text-opacity-25'>
                Tasks Completed
              </p>
            </div>
          </div>
        </div>
        {/* No of tasks completed based on tags */}
        <div className='flex space-x-5 py-5 w-full overflow-x-auto'>
          {tagStatsCard.map(({ tagName, pending, statusPercent }) => (
            <TagStatus
              tagName={tagName}
              statusPercent={statusPercent}
              pending={pending}
            />
          ))}
        </div>
      </div>
      <div className='flex-none w-1/3 hidden sm:block'>
        <TaskView />
      </div>
    </div>
  );
};

export default Dashboard;

// Weekly stats - Tasks completed, minutes worked - Bar chart maybe?
