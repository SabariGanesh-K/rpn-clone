import React from 'react'

import { Routes, Route} from "react-router-dom";
import { DepositHistory } from './Deposit History/depositHistory';
import { Deposit } from './Deposit/Deposit';
import { DepositDevelop } from './Deposit/DepositDevelopment';
import { Reservefund } from './Deposit/Reservefund';
import { Withdraw } from './Deposit/Withdraw';
import { Home } from './homje-page';
import { TeamPerformance } from './Team Performance/team-performance';
export const Main = () => {
    return (
     
        <div>
        

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/DepositDev" element={<DepositDevelop />} />
            <Route path="/reservefund" element={<Reservefund />} />
            <Route path="/deposithistory" element={<DepositHistory />} />
            <Route path = "/team" element = {<TeamPerformance/>}/>
            </Routes>
            </div>
  )
}
