import React from "react";
import Chip from "src/atoms/chip";
import { IconButton } from "src/atoms/button";
import { Delete as DeleteIcon, Edit as EditIcon } from "@icons";
import PropTypes from "prop-types";
import { useSetRecoilState } from "recoil";
import { notesState } from "src/constants/stateAtoms";

const NoteCard = (props) => {
  const { text, tags, id } = props;
  const setNotes = useSetRecoilState(notesState);
  const deleteNote = () => {
    setNotes((oldNotes) => oldNotes.filter((note) => note.id !== id));
  };
  return (
    <div className="flex flex-col space-y-1 rounded-md shadow-md my-5 px-2 py-2 bg-primary-main dark:bg-primary-dark">
      <div className="flex flex-row">
        <p className="flex-1 self-center text-primary-text">{text}</p>
        <span className="flex flex-col justify-self-end">
          <IconButton color="secondary" onClick={deleteNote}>
            <DeleteIcon />
          </IconButton>
          {/* <IconButton color="secondary">
            <EditIcon />
          </IconButton> */}
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
NoteCard.propTypes = {
  text: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
};

export default NoteCard;
