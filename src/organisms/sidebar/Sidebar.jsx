import React from "react";
import Drawer from "src/atoms/drawer";
import Avatar from "src/atoms/avatar";
import { useRecoilState } from "recoil";
import { appSidebarState } from "src/constants/stateAtoms";
import { Button } from "src/atoms/button";
import { Link } from "react-router-dom";

import { AssignmentTurnedIn, NoteAdd, Timer, TrendingUp } from "@icons";

const Sidebar = ({ className, classes }) => {
  const [isOpen] = useRecoilState(appSidebarState);

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      className={className}
      classes={classes}
    >
      <div className="flex flex-row px-5 py-5">
        <Avatar>IN</Avatar>
        <p className="self-center px-3">Welcome Imtiaz</p>
      </div>

      <div className="flex flex-col items-baseline px-5">
        <Link to="/tasks">
          <Button color="secondary" startIcon={<AssignmentTurnedIn />}>
            Tasks
          </Button>
        </Link>
        <Link to="/notes">
          <Button color="secondary" startIcon={<NoteAdd />}>
            Notes
          </Button>
        </Link>
        <Link to="/timer">
          <Button color="secondary" startIcon={<Timer />}>
            Pomodoro
          </Button>
        </Link>
        <Link to="/stats">
          <Button color="secondary" startIcon={<TrendingUp />}>
            Stats
          </Button>
        </Link>
      </div>
    </Drawer>
  );
};
export default Sidebar;
