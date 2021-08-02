/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import { AddCircle as AddCircleIcon, HighlightOff as CancelIcon } from '@icons';
import TextField from 'src/atoms/textfield';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { allTagsState, notesState } from 'src/constants/stateAtoms';
import useLocalStorage from 'src/hooks/useLocalStorage';

import CreatableSelect from 'react-select/creatable';
import customStyles from 'src/constants/MultiSelectStyles';

const AddNote = ({ onTagFilterChange, tagFilterValues }) => {
  const [tagNames, setTagNames] = useRecoilState(allTagsState);
  const addNote = useSetRecoilState(notesState);
  const [persistedNotesList, setPersistedNotesList] = useLocalStorage(
    'notes',
    []
  );
  const [persistedTags, setPersistedTags] = useLocalStorage('tags', tagNames);
  const [selectedTag, setSelectedTag] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setTagNames(persistedTags);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createNote = () => {
    if (!showForm) {
      setShowForm(!showForm);
      return;
    }
    if (noteText === '') {
      return;
    }
    addNote((oldNotesList) => {
      const newNotesList = [
        {
          id: oldNotesList.length + 1,
          text: noteText,
          tags: selectedTag,
        },
        ...oldNotesList,
      ];
      setPersistedNotesList(newNotesList);
      return newNotesList;
    });

    setNoteText('');
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
    <div className='flex flex-col space-y-1 rounded-md shadow-md my-5 px-2 py-2 '>
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
                <i className='ml-1'>
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
            placeholder='Add a Note...'
            fullWidth
            required
            value={noteText}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                createNote();
              }
            }}
            margin='normal'
            onChange={(e) => setNoteText(e.target.value)}
          />
        </div>
        <div className='mt-3'>
          <CreatableSelect
            isMulti
            styles={customStyles}
            className='w-full  focus:outline-none'
            value={selectedTag}
            onChange={handleTagChange}
            options={tagNames}
          />
        </div>
        <div className='space-x-2 mt-5'>
          <button
            type='button'
            onClick={createNote}
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
  );
};

export default AddNote;
