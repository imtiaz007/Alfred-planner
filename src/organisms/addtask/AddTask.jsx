/* eslint-disable no-unused-vars */
import React from 'react';
import { AddCircle as AddCircleIcon } from '@icons';
import TextField from 'src/atoms/textfield';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { allTagsState, tasksState } from 'src/constants/stateAtoms';
import useLocalStorage from 'src/hooks/useLocalStorage';
import Multiselect from 'multiselect-react-dropdown';

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
    <div className='flex flex-col space-y-1 rounded-md shadow-md my-5 px-2'>
      <div>
        {/* chips buttons to filter tasks by tags */}
        <button type='button' className='text-primary-500' onClick={createTask}>
          <AddCircleIcon fontSize='large' />
        </button>
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
          {/* <span>
            <IconButton>
              <TodayIcon />
            </IconButton>
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default AddTask;
