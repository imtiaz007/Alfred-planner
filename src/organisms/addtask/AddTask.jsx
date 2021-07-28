/* eslint-disable no-unused-vars */
import React from 'react';
import { AddCircle as AddCircleIcon } from '@icons';
import TextField from 'src/atoms/textfield';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { allTagsState, tasksState } from 'src/constants/stateAtoms';
import useLocalStorage from 'src/hooks/useLocalStorage';
import Multiselect from 'multiselect-react-dropdown';
import { format } from 'date-fns';

const AddTask = () => {
  const [taskName, setTaskName] = React.useState('');
  const [selectedTag, setSelectedTag] = React.useState([]);
  let tagNames = useRecoilValue(allTagsState);
  const addTask = useSetRecoilState(tasksState);

  const [persistedTasksList, setPersistedTasksList] = useLocalStorage(
    'tasks',
    []
  );
  const [showForm, setShowForm] = React.useState(false);
  const multiselectRef = React.useRef();
  const today = format(new Date(), 'yyyy-MM-dd');
  const [taskDate, setTaskDate] = React.useState(today);
  const createTask = () => {
    if (!showForm) {
      setShowForm(!showForm);
      return;
    }
    if (taskName === '') {
      return;
    }
    addTask((oldTaskList) => {
      const newTaskList = [
        {
          id: oldTaskList.length + 1,
          name: taskName,
          tags: selectedTag,
          date: taskDate,
          isCompleted: false,
        },
        ...oldTaskList,
      ];
      setPersistedTasksList(newTaskList);
      return newTaskList;
    });
    setTaskName('');
    setSelectedTag([]);
    setShowForm(!showForm);
    multiselectRef.current.resetSelectedValues();
  };

  return (
    <div className='flex flex-col space-y-1 rounded-md shadow-md my-5 px-2 py-2'>
      <div className='flex space-x-2 items-center'>
        <button
          type='button'
          className={`text-primary-500 ${showForm ? 'hidden' : ''}`}
          onClick={() => setShowForm(!showForm)}
        >
          <AddCircleIcon fontSize='large' />
        </button>
        {/* <div className='space-x-2'>
          {tagNames.map((tag) => (
            <span
              className='bg-primary-700 text-text-200 p-1 px-2 rounded-xl text-sm font-medium'
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div> */}
      </div>
      <div className={showForm ? '' : 'hidden'}>
        <div className='flex flex-row'>
          <TextField
            id='standard-full-width'
            style={{ margin: 8 }}
            placeholder='Add a task...'
            fullWidth
            value={taskName}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                createTask();
              }
            }}
            onChange={(e) => setTaskName(e.target.value)}
            margin='normal'
          />
        </div>
        <div className='flex flex-row space-x-1'>
          <Multiselect
            options={tagNames}
            selectedValues={selectedTag}
            ref={multiselectRef}
            onSelect={(list) => setSelectedTag(list)}
            onRemove={(list) => setSelectedTag(list)}
            isObject={false}
            hidePlaceholder
            placeholder='Add tags'
            avoidHighlightFirstOption
            style={{
              optionContainer: {
                background: '#52525B',
                color: '#F4F4F5',
                borderColor: '#4F46E5',
              },
              chips: { background: '#4F46E5' },
              // searchBox: { borderColor: '#4F46E5', width: 'auto' },
              inputField: {
                margin: '0px',
              },
            }}
          />
        </div>
        <div className='flex flex-row justify-between items-center  mt-2 '>
          <input
            type='date'
            name='data'
            min={today}
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className='w-auto rounded-md bg-background-800 text-text-300'
          />
          <div className='space-x-2'>
            <button
              type='button'
              onClick={createTask}
              className='py-1 px-2 bg-primary-600 text-text-300 rounded-md'
            >
              Add
            </button>
            <button
              type='button'
              onClick={() => setShowForm(!showForm)}
              className='py-1 px-2 bg-primary-600 text-text-300 rounded-md'
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
