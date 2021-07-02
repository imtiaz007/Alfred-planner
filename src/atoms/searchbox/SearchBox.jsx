import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { SearchRounded } from "@icons";

const SearchBox = () => (
  <TextField
    id="input-with-icon-textfield"
    label="Search.."
    variant="outlined"
    color="primary"
    size="small"
    fullWidth
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <SearchRounded color="secondary" />
        </InputAdornment>
      ),
    }}
  />
);

export default SearchBox;
