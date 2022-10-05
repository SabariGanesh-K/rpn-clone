import React from 'react'

import { Routes, Route} from "react-router-dom";
import { Home } from './homje-page';
export const Main = () => {
    return (
     
        <div>
        
      
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            </Routes>
            </div>
  )
}
