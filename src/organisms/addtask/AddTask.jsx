import React from "react";

import Chip from "src/atoms/chip";
import { IconButton } from "src/atoms/button";
import {
  MoreVert as MoreVertIcon,
  AddCircle as AddCircleIcon,
  Cancel as CancelIcon,
  Today as TodayIcon,
} from "@icons";
import TextField from "src/atoms/textfield";

// fro multi select
import Select from "src/atoms/select";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { allTagsState, tasksState } from "src/constants/stateAtoms";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AddTask = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [taskName, setTaskName] = React.useState("");
  const [selectedTag, setSelectedTag] = React.useState([]);
  let tagNames = useRecoilValue(allTagsState);
  const AddTask = useSetRecoilState(tasksState);

  const handleChange = (event) => {
    setSelectedTag(event.target.value);
  };

  const createTask = () => {
    if (taskName === "") {
      return;
    }
    AddTask((oldTaskList) => [
      {
        id: oldTaskList.length + 1,
        name: taskName,
        tags: selectedTag,
        isCompleted: false,
      },
      ...oldTaskList,
    ]);
    setTaskName("");
    setSelectedTag([]);
  };

  return (
    <div className="flex flex-col space-y-1 rounded-md shadow-md my-5 px-2 py-2 bg-primary-main dark:bg-primary-dark">
      <div className="flex flex-row">
        <IconButton color="secondary" onClick={createTask}>
          <AddCircleIcon />
        </IconButton>
        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Add a task..."
          fullWidth
          value={taskName}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              createTask();
            }
          }}
          onChange={(e) => setTaskName(e.target.value)}
          margin="normal"
        />
        {/* <IconButton>
          <MoreVertIcon />
        </IconButton> */}
      </div>
      <div className="flex flex-row space-x-1">
        <InputLabel id="demo-mutiple-chip-label" shrink className="self-center">
          Tags
        </InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          fullWidth
          value={selectedTag}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  color="secondary"
                  deleteIcon={<CancelIcon />}
                  onDelete={handleChange}
                />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {tagNames.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, selectedTag, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        <span>
          <IconButton>
            <TodayIcon />
          </IconButton>
        </span>
      </div>
    </div>
  );
};

export default AddTask;
