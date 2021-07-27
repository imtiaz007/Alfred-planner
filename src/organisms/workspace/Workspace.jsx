import React from 'react';

import WorkspaceHeader from './components/workspaceHeader';
import WorkSpaceBody from './components/workspaceBody';
import Sidebar from '../sidebar';

const Workspace = () => (
  <div className='h-screen bg-background-600 flex flex-col'>
    {/* <WorkspaceHeader /> */}
    <div className='flex h-full overflow-y-auto flex-col-reverse justify-between sm:flex-row sm:px-3 py-2 bg-background-900'>
      <Sidebar />
      <WorkSpaceBody />
    </div>
  </div>
);

export default Workspace;
