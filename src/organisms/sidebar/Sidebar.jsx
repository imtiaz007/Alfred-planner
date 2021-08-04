import React from 'react';
import { Link } from 'react-router-dom';

import {
  AssignmentTurnedIn,
  NoteAdd,
  Timer,
  Settings,
  HomeRounded,
} from '@icons';

const Sidebar = () => (
  <div className='bg-primary-600 opacity-90 w-4/5 sm:w-12 h-12 sm:h-full mx-auto fixed sm:static inset-x-0.5 flex sm:flex-col flex-none justify-center items-center  py-2 sm:px-2 space-x-5 sm:space-x-0 sm:space-y-5 rounded-lg'>
    <Link
      to='/home'
      className='text-text-300  hover:text-text-900 text-center h-8 w-8 rounded-md'
    >
      <HomeRounded fontSize='large' />
    </Link>
    <Link
      to='/notes'
      className='text-text-300  hover:text-text-900 text-center h-8 w-8 rounded-md'
    >
      <NoteAdd fontSize='large' />
    </Link>
    <Link
      to='/tasks'
      className='text-text-300  hover:text-text-900 text-center h-8 w-8 rounded-md'
    >
      <AssignmentTurnedIn fontSize='large' />
    </Link>
    <Link
      to='/timer'
      className='text-text-300  hover:text-text-900 text-center h-8 w-8 rounded-md'
    >
      <Timer fontSize='large' />
    </Link>
    <Link
      to='settings'
      className='text-text-300  hover:text-text-900 text-center h-8 w-8 rounded-md'
    >
      <Settings fontSize='large' />
    </Link>
  </div>
);
export default Sidebar;
