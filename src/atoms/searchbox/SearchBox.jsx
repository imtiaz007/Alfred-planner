import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { SearchRounded } from '@icons';

const SearchBox = () => (
  <input
    type='search'
    class=' w-full px-2 py-2 bg-background-800 text-text-400 rounded-md focus:ring-4 focus:ring-primary-500'
    placeholder='Search'
  />
);

export default SearchBox;
