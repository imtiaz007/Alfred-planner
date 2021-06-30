import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";
import Workspace from "./organisms/workspace";
import MaterialTheme from "./MaterialTheme";

function App() {
  return (
    <MaterialTheme>
      <RecoilRoot>
        <Router>
          <Workspace />
        </Router>
      </RecoilRoot>
    </MaterialTheme>
  );
}

export default App;
