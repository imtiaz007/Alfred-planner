import React from 'react';

import Chip from 'src/atoms/chip';
import { IconButton } from 'src/atoms/button';
import {
  MoreVert as MoreVertIcon,
  AddCircle as AddCircleIcon,
  Cancel as CancelIcon,
  Today as TodayIcon,
} from '@icons';
import TextField from 'src/atoms/textfield';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { allTagsState, notesState } from 'src/constants/stateAtoms';
import useLocalStorage from 'src/hooks/useLocalStorage';
import Multiselect from 'multiselect-react-dropdown';

const AddNote = () => {
  const [selectedTag, setSelectedTag] = React.useState([]);
  const [noteText, setNoteText] = React.useState('');
  const tagNames = useRecoilValue(allTagsState);
  const addNote = useSetRecoilState(notesState);
  const [persistedNotesList, setPersistedNotesList] = useLocalStorage(
    'notes',
    []
  );
  const [showForm, setShowForm] = React.useState(false);

  const multiselectRef = React.useRef();

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
    multiselectRef.current.resetSelectedValues();
  };

  return (
    <div className='flex flex-col space-y-1 rounded-md shadow-md my-5 px-2 py-2 '>
      <div>
        <button type='button' className='text-primary-500' onClick={createNote}>
          <AddCircleIcon fontSize='large' />
        </button>
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
        <div className=''>
          <Multiselect
            options={tagNames}
            selectedValues={selectedTag}
            ref={multiselectRef}
            onSelect={(list) => setSelectedTag(list)}
            onRemove={(list) => setSelectedTag(list)}
            isObject={false}
            closeOnSelect={true}
            hidePlaceholder
            placeholder='Add tags'
            avoidHighlightFirstOption
            style={{
              optionContainer: { background: '#52525B', color: '#F4F4F5' },
              chips: { background: '#4F46E5' },
              searchBox: { borderColor: '#4F46E5' },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddNote;
