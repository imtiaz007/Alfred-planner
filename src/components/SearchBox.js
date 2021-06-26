import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { SearchRounded } from "@material-ui/icons";

const SearchBox = () => {
  return (
    // to be replaced with material ui
    <div className="w-full px-6">
      <TextField
        id="input-with-icon-textfield"
        label="Search or Add Task"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchRounded />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBox;
