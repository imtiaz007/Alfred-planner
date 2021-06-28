import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import cx from 'classnames';

import TaskView from 'src/pages/taskView';
import TimerView from 'src/pages/timerView';

const WorkSpaceBody = ({ className }) => (
  <main className={cx('flex w-full', className)}>
    <Switch>
      <Route path="/tasks" component={TaskView} />
      <Route path="/timer" component={TimerView} />
      <Redirect from="*" to="/tasks" />
    </Switch>
  </main>
);

export default WorkSpaceBody;
