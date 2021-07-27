import React from 'react';
// import SearchBox from 'src/atoms/searchbox';
import AddNote from 'src/organisms/addnote';
import NotesList from 'src/organisms/notesList';

// eslint-disable-next-line arrow-body-style
const NoteView = () => {
  return (
    <div className='flex flex-col w-full h-full'>
      <div className='w-full sm:w-1/3 py-3 sticky'>
        {/* <SearchBox /> */}
        <AddNote />
      </div>
      <div className='w-full sm:w-1/3 overflow-y-auto'>
        <NotesList />
      </div>
    </div>
  );
};

export default NoteView;
