import React from "react";
import Chip from "src/atoms/chip";
import { IconButton } from "src/atoms/button";
import { MoreVert as MoreVertIcon } from "@icons";

const NoteCard = () => (
  <div className="flex flex-col space-y-1 rounded-md shadow-md my-5 px-2 py-2 bg-primary-main dark:bg-primary-dark">
    <div className="flex flex-row">
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

export default NoteCard;
