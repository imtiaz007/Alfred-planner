import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TaskView from 'src/pages/taskView';
import TimerView from 'src/pages/timerView';
import NoteView from 'src/pages/notesView';
import SettingsView from 'src/pages/settingsView';
import Dashboard from 'src/pages/Dashboard';

const WorkSpaceBody = () => (
  <main className='w-full h-full overflow-y-auto p-5 pt-3'>
    <Switch>
      <Route path='/tasks' component={TaskView} />
      <Route path='/notes' component={NoteView} />
      <Route path='/timer' component={TimerView} />
      <Route path='/home' component={Dashboard} />
      <Route path='/settings' component={SettingsView} />
      <Redirect from='*' to='/home' />
    </Switch>
  </main>
);

export default WorkSpaceBody;
