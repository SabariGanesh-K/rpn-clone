import React from 'react'

import { Routes, Route} from "react-router-dom";
import { Deposit } from './Deposit/Deposit';
import { DepositDevelop } from './Deposit/DepositDevelopment';
import { Withdraw } from './Deposit/Withdraw';
import { Home } from './homje-page';
export const Main = () => {
    return (
     
        <div>
        

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/DepositDev" element={<DepositDevelop />} />
            </Routes>
            </div>
  )
}
