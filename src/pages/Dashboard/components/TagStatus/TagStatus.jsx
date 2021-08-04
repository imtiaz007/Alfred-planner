import React from 'react';

const TagStatus = ({ tagName, pending, statusPercent }) => {
  return (
    <div className='flex-none flex flex-col justify-between w-2/3 sm:w-48 space-y-2 pb-3 bg-background-800 rounded-xl shadow-md'>
      <div className='flex items-center justify-center w-24 max-w-32 py-2 px-2 -mt-5 ml-5 rounded-lg bg-primary-500 text-text-200'>
        <p className='uppercase text-sm font-semibold text-text-300 break-normal'>
          {tagName}
        </p>
      </div>
      <div className='w-full relative px-3 pt-1'>
        <div className='flex mb-2 items-center justify-between'>
          <div>
            <span className='text-xs sm:text-sm inline-block py-1  text-text-200'>
              {pending} pending
            </span>
          </div>
          <div className='text-right'>
            <span className='text-xs inline-block text-text-200'>
              {statusPercent}
            </span>
          </div>
        </div>
        <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-200'>
          <div
            style={{ width: statusPercent }}
            className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500'
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TagStatus;
