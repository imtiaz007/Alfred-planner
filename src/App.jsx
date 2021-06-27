import React from 'react';
import { RecoilRoot } from 'recoil';

import Workspace from './organisms/workspace';

function App() {
  return (
    <RecoilRoot>
      <Workspace />
    </RecoilRoot>
  );
}

export default App;
