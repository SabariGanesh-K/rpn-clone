import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Main } from './component/main';
import { AppProvider } from './context/AppConfig';

function App() {



  // console.log(data)
  return (
    <div className="App">
      <BrowserRouter>
      <AppProvider>
      <Main/>
      </AppProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
