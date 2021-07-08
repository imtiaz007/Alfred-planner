import React from "react";
import SearchBox from "src/atoms/searchbox";
import NoteCard from "src/organisms/notecard";
import AddNote from "src/organisms/addnote";
import { notesState } from "src/constants/stateAtoms";
import { useRecoilValue } from "recoil";

const NoteView = () => {
  const allNotes = useRecoilValue(notesState);

  return (
    <div className="flex flex-col w-full my-5">
      <div className="w-full sm:w-1/3 py-3 sticky">
        <SearchBox />
        <AddNote />
      </div>
      <div className="overflow-x-hidden overflow-y-auto">
        <div className="w-full sm:w-1/3 ">
          {allNotes.map((note) => (
            <NoteCard
              text={note.text}
              tags={note.tags}
              id={note.id}
              key={note.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoteView;
