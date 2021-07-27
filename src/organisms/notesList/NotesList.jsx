import React, { useEffect } from 'react';
import NoteCard from 'src/organisms/notecard';
import { notesState } from 'src/constants/stateAtoms';
import { useRecoilState } from 'recoil';
import useLocalStorage from 'src/hooks/useLocalStorage';
import { ReactComponent as AddNoteSvg } from 'src/assets/addNote.svg';

const NotesList = () => {
  const [allNotes, setNotes] = useRecoilState(notesState);
  const [persistedNotesList] = useLocalStorage('notes', []);
  useEffect(() => {
    setNotes(persistedNotesList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {allNotes.length !== 0 ? (
        allNotes.map((note) => (
          <NoteCard
            text={note.text}
            tags={note.tags}
            id={note.id}
            key={note.text}
          />
        ))
      ) : (
        <div className='flex flex-col items-center'>
          <p className='text-text-100 font-thin text-xl'>Add Some notes!</p>
          <AddNoteSvg className='w-full h-1/4 px-10 mt-5' />
        </div>
      )}
    </>
  );
};

export default NotesList;
