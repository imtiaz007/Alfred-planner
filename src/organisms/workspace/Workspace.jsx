import React, { useState } from "react";
import Sidebar from "src/organisms/sidebar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useRecoilValue } from "recoil";
import { appSidebarState } from "src/constants/stateAtoms";
import cx from "classnames";
import WorkspaceHeader from "./components/workspaceHeader";
import WorkSpaceBody from "./components/workspaceBody";
import useStyles from "./workspace.classes";

const Workspace = () => {
  const isSidebarOpen = useRecoilValue(appSidebarState);
  const classes = useStyles();

  return (
    <div className="flex h-screen">
      <CssBaseline />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      />
      <WorkspaceHeader
        className={cx(classes.appBar, { [classes.appBarShift]: isSidebarOpen })}
      />
      <WorkSpaceBody
        className={cx(classes.content, {
          [classes.contentShift]: isSidebarOpen,
        })}
      />
    </div>
  );
};

export default Workspace;
