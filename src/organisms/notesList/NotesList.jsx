import React, { useEffect } from 'react';
import NoteCard from 'src/organisms/notecard';
import { allTagsState, notesState } from 'src/constants/stateAtoms';
import { useRecoilState } from 'recoil';
import useLocalStorage from 'src/hooks/useLocalStorage';
import { ReactComponent as AddNoteSvg } from 'src/assets/addNote.svg';

const NotesList = () => {
  const [allNotes, setAllNotes] = useRecoilState(notesState);
  const [allTags, setTags] = useRecoilState(allTagsState);
  const [persistedNotesList] = useLocalStorage('notes', []);
  const [persistedTags] = useLocalStorage('tags', []);
  const [notes, setNotes] = React.useState(allNotes);

  useEffect(() => {
    setAllNotes(persistedNotesList);
    setTags(persistedTags);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const tagFilterValues = allTags
      .filter((tag) => tag.show)
      .map((tag) => tag.value);

    const withTagFilter = allNotes.filter(({ tags }) =>
      tags.some((val) => tagFilterValues.includes(val.label))
    );
    setNotes(withTagFilter);
  }, [allTags, allNotes]);

  return (
    <>
      {notes.length !== 0 ? (
        notes.map((note) => (
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
