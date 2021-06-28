import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import Workspace from './organisms/workspace';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Workspace />
      </Router>
    </RecoilRoot>
  );
}

export default App;
