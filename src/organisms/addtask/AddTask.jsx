/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { AddCircle as AddCircleIcon, HighlightOff as CancelIcon } from '@icons';
import TextField from 'src/atoms/textfield';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { allTagsState, tasksState } from 'src/constants/stateAtoms';
import useLocalStorage from 'src/hooks/useLocalStorage';
import { format } from 'date-fns';

import CreatableSelect from 'react-select/creatable';
import customStyles from 'src/constants/MultiSelectStyles';

const AddTask = ({ onTagFilterChange, tagFilterValues }) => {
  const [tagNames, setTagNames] = useRecoilState(allTagsState);
  const addTask = useSetRecoilState(tasksState);
  const [persistedTasksList, setPersistedTasksList] = useLocalStorage(
    'tasks',
    []
  );
  const [persistedTags, setPersistedTags] = useLocalStorage('tags', tagNames);
  const [taskName, setTaskName] = useState('');
  const [selectedTag, setSelectedTag] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const today = format(new Date(), 'yyyy-MM-dd');
  const [taskDate, setTaskDate] = useState(today);

  useEffect(() => {
    setTagNames(persistedTags);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  };

  const handleTagChange = (newValue, actionMeta) => {
    if (actionMeta.action === 'create-option') {
      const toAdd = newValue.filter((tag) => tag.__isNew__);
      setTagNames((oldTags) => {
        const newTags = [
          ...oldTags,
          { label: toAdd[0].label, value: toAdd[0].value, show: true },
        ];
        setPersistedTags(newTags);
        return newTags;
      });
    }
    setSelectedTag(newValue);
  };

  const handelTagFilterChange = (e) => {
    let toAdd = JSON.parse(e.currentTarget.value);
    toAdd.show = !toAdd.show;
    setTagNames((oldTags) => {
      const filteredTags = oldTags.filter((tag) => tag.value !== toAdd.value);
      const newTags = [toAdd, ...filteredTags];
      setPersistedTags(newTags);
      return newTags;
    });
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
        <div className='flex space-x-2'>
          {tagNames.map((tag) => (
            <button
              type='button'
              value={JSON.stringify(tag)}
              onClick={(e) => handelTagFilterChange(e)}
              className={`flex items-center border border-primary-700 text-text-200 p-1 px-2 rounded-xl text-sm font-medium focus:outline-none ${
                tag.show ? 'bg-primary-700' : ''
              }`}
              key={tag.label}
            >
              {tag.label}
              {tag.show ? (
                <i value={tag} className='ml-1'>
                  <CancelIcon fontSize='small' />
                </i>
              ) : (
                ''
              )}
            </button>
          ))}
        </div>
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
          <CreatableSelect
            isMulti
            styles={customStyles}
            className='w-full'
            value={selectedTag}
            onChange={handleTagChange}
            options={tagNames}
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
