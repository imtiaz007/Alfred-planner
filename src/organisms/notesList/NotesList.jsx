import React, { useEffect } from 'react';
import NoteCard from 'src/organisms/notecard';
import { notesState } from 'src/constants/stateAtoms';
import { useRecoilState, useRecoilValue } from 'recoil';
import useLocalStorage from 'src/hooks/useLocalStorage';

const NotesList = () => {
  const [allNotes, setNotes] = useRecoilState(notesState);
  const [persistedNotesList, setPersistedNotesList] = useLocalStorage(
    'notes',
    []
  );
  useEffect(() => {
    setNotes(persistedNotesList);
  }, []);

  return (
    <>
      {allNotes.map((note) => (
        <NoteCard
          text={note.text}
          tags={note.tags}
          id={note.id}
          key={note.text}
        />
      ))}
    </>
  );
};

export default NotesList;
