import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import cx from "classnames";

import TaskView from "src/pages/taskView";
import TimerView from "src/pages/timerView";
import NoteView from "src/pages/notesView";
import statsView from "src/pages/statsView";

const WorkSpaceBody = ({ className }) => (
  <main className={cx("flex w-full bg-background", className)}>
    <Switch>
      <Route path="/tasks" component={TaskView} />
      <Route path="/notes" component={NoteView} />
      <Route path="/timer" component={TimerView} />
      <Route path="/stats" component={statsView} />
      <Redirect from="*" to="/tasks" />
    </Switch>
  </main>
);

export default WorkSpaceBody;
