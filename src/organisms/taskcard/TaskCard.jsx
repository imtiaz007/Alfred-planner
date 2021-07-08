import React from "react";
import Chip from "src/atoms/chip";
import Checkbox from "src/atoms/checkbox";
import { IconButton } from "src/atoms/button";
import {
  MoreVert as MoreVertIcon,
  Brightness1 as Brightness1Icon,
  Brightness1Outlined as Brightness1OutlinedIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
} from "@icons";
import PropTypes from "prop-types";
import { useSetRecoilState } from "recoil";
import { tasksState } from "src/constants/stateAtoms";

const TaskCard = (props) => {
  const { name, id, tags, isCompleted } = props;
  const updateTasks = useSetRecoilState(tasksState);
  const handleChange = () => {
    updateTasks((oldTaskList) => {
      const toChange = oldTaskList.findIndex((task) => task.id === id);
      const newTaskList = [...oldTaskList];
      newTaskList[toChange] = {
        ...newTaskList[toChange],
        isCompleted: !newTaskList[toChange].isCompleted,
      };
      return newTaskList;
    });
  };

  const removeTask = () => {
    updateTasks((oldTaskList) => oldTaskList.filter((task) => task.id !== id));
  };

  return (
    <div className="flex flex-col space-y-1 rounded-md shadow-md my-5 px-2 py-2 bg-primary-main dark:bg-primary-dark">
      <div className="flex flex-row">
        <Checkbox
          checked={isCompleted}
          color="secondary"
          icon={<Brightness1OutlinedIcon />}
          checkedIcon={<Brightness1Icon />}
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <p className="flex-1 self-center text-primary-text">{name}</p>
        <span className="justify-self-end">
          <IconButton color="secondary" onClick={removeTask}>
            <DeleteIcon />
          </IconButton>
        </span>
      </div>
      <div className="flex flex-row space-x-1">
        {tags.map((tag, i) => (
          <Chip size="small" label={tag} color="secondary" key={i} />
        ))}
      </div>
    </div>
  );
};
TaskCard.propTypes = {
  name: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

export default TaskCard;
