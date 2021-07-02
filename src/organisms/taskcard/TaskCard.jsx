import React from "react";
import Chip from "src/atoms/chip";
import Checkbox from "src/atoms/checkbox";
import { IconButton } from "src/atoms/button";
import {
  MoreVert as MoreVertIcon,
  Brightness1 as Brightness1Icon,
  Brightness1Outlined as Brightness1OutlinedIcon,
} from "@icons";

const TaskCard = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="flex flex-col space-y-1 rounded-md shadow-md my-5 px-2 py-2 bg-primary-main dark:bg-primary-dark">
      <div className="flex flex-row">
        <Checkbox
          checked={checked}
          color="secondary"
          icon={<Brightness1OutlinedIcon />}
          checkedIcon={<Brightness1Icon />}
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <p className="flex-1 self-center text-primary-text">
          Complete the list view
        </p>
        <span className="justify-self-end">
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </span>
      </div>
      <div className="flex flex-row space-x-1">
        <Chip size="small" label="Basic" color="secondary" />
        <Chip size="small" label="Basic" color="secondary" />
        <Chip size="small" label="Basic" color="secondary" />
      </div>
    </div>
  );
};

export default TaskCard;
