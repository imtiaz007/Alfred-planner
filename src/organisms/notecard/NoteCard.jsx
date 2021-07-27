import React from 'react';
import Chip from 'src/atoms/chip';
import { IconButton } from 'src/atoms/button';
import { Delete as DeleteIcon, Edit as EditIcon } from '@icons';
import PropTypes from 'prop-types';
import { useSetRecoilState } from 'recoil';
import { notesState } from 'src/constants/stateAtoms';
import useLocalStorage from 'src/hooks/useLocalStorage';

const NoteCard = (props) => {
  const { text, tags, id } = props;
  const setNotes = useSetRecoilState(notesState);
  const [persistedNotesList, setPersistedNotesList] = useLocalStorage(
    'notes',
    []
  );

  const deleteNote = () => {
    let newNotesList;
    setNotes((oldNotes) => {
      newNotesList = oldNotes.filter((note) => note.id !== id);
      return newNotesList;
    });
    setPersistedNotesList(newNotesList);
  };

  return (
    <div className='flex flex-col space-y-1 rounded-md shadow-md my-5 px-2 py-2'>
      <div className='flex flex-row'>
        <p className='flex-1 self-center text-text-400'>{text}</p>
        <span className='flex flex-col justify-self-end'>
          <button
            type='button'
            className='text-primary-600'
            onClick={deleteNote}
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
NoteCard.propTypes = {
  text: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
};

export default NoteCard;
