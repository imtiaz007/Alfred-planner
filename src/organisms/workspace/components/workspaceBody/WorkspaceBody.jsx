import React from 'react';
import cx from 'classnames';
import AddTask from '../../../../components/AddTask';
import TaskList from '../../../../components/TaskList';

const WorkSpaceBody = ({ className }) => (
  <main className={cx('flex w-full', className)}>
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
  </main>
);

export default WorkSpaceBody;
