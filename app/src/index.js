import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './commonComponents/MainLayout';

import CounterContainer from './pages/CounterPage/containers/CounterContainer'
import Routes from './Routes/Routes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainLayout>
        <Routes />
      </MainLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

