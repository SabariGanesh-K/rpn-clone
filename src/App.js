import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Deposit } from './component/Deposit/Deposit';
import { DepositDevelop } from './component/Deposit/DepositDevelopment';
import { Reservefund } from './component/Deposit/Reservefund';
import { Withdraw } from './component/Deposit/Withdraw';

import { Main } from './component/main';
import { AppProvider } from './context/AppConfig';

function App() {



  // console.log(data)
  return (
    <div className="App">
      <BrowserRouter>
      <AppProvider>
      {/* <Main/> */}
      {/* <DepositDevelop/> */}
      {/* <Withdraw/> */}
      <Reservefund/>
      </AppProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
