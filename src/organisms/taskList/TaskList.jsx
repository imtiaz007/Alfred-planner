/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { tasksState } from 'src/constants/stateAtoms.js';
import useLocalStorage from 'src/hooks/useLocalStorage';
import TaskCard from 'src/organisms/taskcard/TaskCard.jsx';
import { ReactComponent as AllDoneSvg } from 'src/assets/allDone.svg';
import { ReactComponent as TodoSvg } from 'src/assets/todo.svg';

const TaskList = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);
  const [persistedTasksList, setPersistedTasksList] = useLocalStorage(
    'tasks',
    []
  );
  useEffect(() => {
    setTasks(persistedTasksList);
  });

  const completedTasks = tasks.filter((task) => task.isCompleted);
  const inCompleteTasks = tasks.filter((task) => !task.isCompleted);

  if (tasks.length === 0) {
    return (
      <div className='flex flex-col items-center'>
        <p className='text-text-100 font-thin text-xl'>Add some tasks!</p>
        <TodoSvg className='w-full h-1/4 px-10 mt-5' />
      </div>
    );
  }

  return (
    <div className='px-5'>
      {inCompleteTasks.length !== 0 ? (
        inCompleteTasks.map((task) => (
          <TaskCard
            id={task.id}
            name={task.name}
            tags={task.tags}
            isCompleted={task.isCompleted}
            key={task.name + task.id}
          />
        ))
      ) : (
        <div className='flex flex-col items-center'>
          <p className='text-text-100 font-thin text-xl'>
            All done! Grab a Coffee
          </p>
          <AllDoneSvg className='w-full h-1/4 px-10 mt-5' />
        </div>
      )}
      <hr className='text-primary-500 text-opacity-50 w-2/3 mx-auto mt-6 mb-12' />
      {completedTasks.map((task) => (
        <TaskCard
          id={task.id}
          name={task.name}
          tags={task.tags}
          isCompleted={task.isCompleted}
        />
      ))}
    </div>
  );
};

export default TaskList;
