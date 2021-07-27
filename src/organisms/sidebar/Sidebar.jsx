import React from 'react';
import { Link } from 'react-router-dom';

import { AssignmentTurnedIn, NoteAdd, Timer, TrendingUp } from '@icons';

const Sidebar = () => (
  <div className="bg-opacity-25 backdrop-filter backdrop-blur-md w-4/5 sm:w-12 h-12 sm:h-full mx-auto fixed sm:static inset-x-0.5 flex sm:flex-col flex-none justify-center items-center bg-primary-400 py-2 sm:px-2 space-x-5 sm:space-x-0 sm:space-y-5 rounded-lg">
    <Link
      to="/notes"
      className="text-text-300  hover:text-text-900 text-center h-8 w-8 rounded-md"
    >
      <NoteAdd fontSize="large" />
    </Link>
    <Link
      to="/tasks"
      className="text-text-300  hover:text-text-900 text-center h-8 w-8 rounded-md"
    >
      <AssignmentTurnedIn fontSize="large" />
    </Link>
    <Link
      to="/timer"
      className="text-text-300  hover:text-text-900 text-center h-8 w-8 rounded-md"
    >
      <Timer fontSize="large" />
    </Link>
    {/* <Link className='text-text-300  hover:text-text-900 text-center h-8 w-8 rounded-md'>
      <TrendingUp fontSize='large' />
    </Link> */}
  </div>
);
export default Sidebar;
