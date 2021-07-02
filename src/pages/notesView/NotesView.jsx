import React from "react";
import SearchBox from "src/atoms/searchbox";
import NoteCard from "src/organisms/notecard";
import AddNote from "src/organisms/addnote";

const NoteView = () => (
  <div className="flex flex-col w-full my-5">
    <div className="w-full sm:w-1/3 py-3 sticky">
      <SearchBox />
      <AddNote />
    </div>
    <div className="overflow-x-hidden overflow-y-auto">
      <div className="w-full sm:w-1/3 ">
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  </div>
);

export default NoteView;
