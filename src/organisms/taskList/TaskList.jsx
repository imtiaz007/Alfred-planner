/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { allTagsState, tasksState } from 'src/constants/stateAtoms.js';
import useLocalStorage from 'src/hooks/useLocalStorage';
import TaskCard from 'src/organisms/taskcard/TaskCard.jsx';
import { ReactComponent as AllDoneSvg } from 'src/assets/allDone.svg';
import { ReactComponent as TodoSvg } from 'src/assets/todo.svg';
import { sub, add } from 'date-fns';

const TaskList = ({ dateFilterValue }) => {
  const [allTasks, setAllTasks] = useRecoilState(tasksState);
  const [allTags, setTags] = useRecoilState(allTagsState);
  const [persistedTasksList] = useLocalStorage('tasks', []);
  const [persistedTags] = useLocalStorage('tags', []);
  const [tasks, setTasks] = React.useState(allTasks);

  useEffect(() => {
    setAllTasks(persistedTasksList);
    setTags(persistedTags);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const today = new Date();
    const tagFilterValues = allTags
      .filter((tag) => tag.show)
      .map((tag) => tag.value);
    if (dateFilterValue === 'today') {
      const withDateFilter = allTasks.filter(
        (task) => new Date(task.date).getDate() === today.getDate()
      );
      const withTagFilter = withDateFilter.filter(({ tags }) =>
        tags.some((val) => tagFilterValues.includes(val.label))
      );
      setTasks(withTagFilter);
    } else if (dateFilterValue === 'yesterday') {
      const yesterday = sub(today, { days: 1 });
      const withDateFilter = allTasks.filter(
        (task) => new Date(task.date).getDate() === yesterday.getDate()
      );
      const withTagFilter = withDateFilter.filter(({ tags }) =>
        tags.some((val) => tagFilterValues.includes(val.label))
      );

      setTasks(withTagFilter);
    } else {
      const tomorrow = add(today, { days: 1 });
      const withDateFilter = allTasks.filter(
        (task) => new Date(task.date).getDate() === tomorrow.getDate()
      );
      const withTagFilter = withDateFilter.filter(({ tags }) =>
        tags.some((val) => tagFilterValues.includes(val.label))
      );

      setTasks(withTagFilter);
    }
  }, [dateFilterValue, allTags, allTasks]);

  const completedTasks = tasks.filter((task) => task.isCompleted);
  const inCompleteTasks = tasks.filter((task) => !task.isCompleted);

  if (tasks.length === 0) {
    return (
      <div className='flex flex-col items-center '>
        <p className='text-text-100 font-thin text-xl'>Add some tasks!</p>
        <TodoSvg className='w-full h-1/4 px-10 mt-5' />
      </div>
    );
  }

  return (
    <div className='flex flex-col w-full items-center'>
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
      {completedTasks.length > 0 ? (
        <hr className='text-primary-500 text-opacity-50 w-2/3 mx-auto mt-6 mb-12' />
      ) : (
        ''
      )}

      {completedTasks.map((task) => (
        <TaskCard
          id={task.id}
          name={task.name}
          tags={task.tags}
          key={task.name + task.id}
          isCompleted={task.isCompleted}
        />
      ))}
    </div>
  );
};

export default TaskList;
