import React from "react";
import Chip from "@material-ui/core/Chip";
import Checkbox from "@material-ui/core/Checkbox";

const TaskCard = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      {/* Replace with material ui cards */}
      <div className="bg-gray-300 rounded-md shadow-md my-5 px-5 py-5">
        <div className="flex flex-row">
          <p className="flex-grow">Complete the list view</p>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
        <div className="flex flex-row space-x-1">
          <Chip size="small" label="Basic" color="secondary" />
          <Chip size="small" label="Basic" color="secondary" />
          <Chip size="small" label="Basic" color="secondary" />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
