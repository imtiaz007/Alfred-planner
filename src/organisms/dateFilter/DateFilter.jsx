import React from 'react';

const DateFilter = (props) => {
  const values = ['yesterday', 'today', 'tomorrow'];

  return (
    <div className='flex space-x-3'>
      {values.map((text) => (
        <button
          key={text}
          type='button'
          value={text}
          onClick={(e) => props.onDatefilterChange(e.target.value)}
          className={`text-text-300 hover:text-primary-400 text-xl focus:ring-0 focus:outline-none 
          ${
            props.dateFilterValue === text
              ? 'font-bold underline text-xl'
              : 'font-thin text-md'
          }`}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default DateFilter;
