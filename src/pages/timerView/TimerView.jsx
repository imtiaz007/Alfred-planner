import React from 'react';
import TimerTabs from 'src/organisms/timertabs';
import TaskView from '../taskView';

const TimerView = () => (
  <div className='flex space-x-5 py-5 w-full overflow-y-auto'>
    <div className=''>
      <TimerTabs />
    </div>
    <div className='mt-3 hidden sm:block'>
      <TaskView />
    </div>
  </div>
);

export default TimerView;
