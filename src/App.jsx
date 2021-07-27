import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import Workspace from './organisms/workspace';
import MaterialTheme from './MaterialTheme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <MaterialTheme>
      <RecoilRoot>
        <Router>
          <ToastContainer
            position='top-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Workspace />
        </Router>
      </RecoilRoot>
    </MaterialTheme>
  );
}

export default App;
