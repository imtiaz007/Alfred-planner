import React from 'react';
// import SearchBox from 'src/atoms/searchbox';
import AddNote from 'src/organisms/addnote';
import NotesList from 'src/organisms/notesList';
import { useRecoilValue } from 'recoil';
import { allTagsState } from 'src/constants/stateAtoms';

const NoteView = () => {
  const allTags = useRecoilValue(allTagsState);
  const [tagFilterValues, setTagFilterValues] = React.useState([allTags[0]]);
  const handleFilterChange = (val) => {
    if (tagFilterValues.includes(val)) {
      const newTagValues = tagFilterValues.filter((tag) => tag !== val);
      setTagFilterValues(newTagValues);
    } else {
      setTagFilterValues((oldValues) => [...oldValues, val]);
    }
  };
  return (
    <div className='flex flex-col w-full h-full'>
      <div className='w-full sm:w-1/3 py-3 sticky'>
        {/* <SearchBox /> */}
        <AddNote
          tagFilterValues={tagFilterValues}
          onTagFilterChange={handleFilterChange}
        />
      </div>
      <div className='w-full sm:w-1/3 overflow-y-auto'>
        <NotesList tagFilterValues={tagFilterValues} />
      </div>
    </div>
  );
};

export default NoteView;
