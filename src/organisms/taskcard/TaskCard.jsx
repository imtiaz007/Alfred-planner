import React from 'react';
import {
  MoreVert as MoreVertIcon,
  Brightness1 as Brightness1Icon,
  Brightness1Outlined as Brightness1OutlinedIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
} from '@icons';
import PropTypes from 'prop-types';
import { useSetRecoilState } from 'recoil';
import { tasksState } from 'src/constants/stateAtoms';
import useLocalStorage from 'src/hooks/useLocalStorage';

const TaskCard = (props) => {
  const { name, id, tags, isCompleted } = props;
  const updateTasks = useSetRecoilState(tasksState);
  const [persistedTasksList, setPersistedTasksList] = useLocalStorage(
    'tasks',
    []
  );
  const handleChange = () => {
    updateTasks((oldTaskList) => {
      const toChange = oldTaskList.findIndex((task) => task.id === id);
      const newTaskList = [...oldTaskList];
      newTaskList[toChange] = {
        ...newTaskList[toChange],
        isCompleted: !newTaskList[toChange].isCompleted,
      };
      setPersistedTasksList(newTaskList);
      return newTaskList;
    });
  };

  const removeTask = () => {
    updateTasks((oldTaskList) => {
      const newTaskList = oldTaskList.filter((task) => task.id !== id);
      setPersistedTasksList(newTaskList);
      return newTaskList;
    });
  };

  return (
    <div className='flex flex-col space-y-1 rounded-md shadow-md my-5 px-2 py-2 '>
      <div className='flex flex-row'>
        <input
          type='checkbox'
          className='form-checkbox m-3 h-5 w-5 text-primary-600 rounded-sm bg-background-400'
          checked={isCompleted}
          onChange={handleChange}
        />
        <p
          className={`flex-1 self-center text-text-400 ${
            isCompleted ? 'line-through' : ''
          }`}
        >
          {name}
        </p>
        <span className='justify-self-end'>
          <button
            type='button'
            className='text-primary-600'
            onClick={removeTask}
          >
            <DeleteIcon />
          </button>
        </span>
      </div>
      <div className='flex flex-row space-x-1'>
        {tags.map((tag, i) => (
          <span
            className='bg-primary-700 text-text-200 p-1 px-2 rounded-xl text-xs font-medium'
            key={i}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
TaskCard.propTypes = {
  name: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

export default TaskCard;
