import React, { useState } from "react";

export const Deposit = () => {
  const [amount, setamount] = useState(0);
  const validity = amount % 50 == 0 && amount>50 && amount<2000;
  const handleChange = (e) => {
    setamount(e.target.value);
  };
  const handleSubmit = () => {
    alert(validity);
  };

  return (
    <div className="bg-black h-screen">
             <div className='mb-5 text-center text-white font-bold text-3xl'>DEPOSIT </div>
      <div className="flex flex-row justify-around bg-black">
        <div>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={amount}
            type="number"
            onChange={(e) => handleChange(e)}
            placeholder="Amount in 50 multiples"
          ></input>
        
        </div>

        <div>
          <span>USDT</span>
        </div>
      </div>
      <div className="flex flex-row justify-center">  {!validity && (
            <div className="text-red-700  font-semibold">
              Minimum deposit 50 USDT. You can add in multiples of 50 USDT.
              Maximum 2000 USDT.
            </div>
          )}</div>
      <div className="bg-neutral-700 text-white">
        <div className="flex flex-row justify-evenly text-center">
            <div>50 <br/>USDT<br/> DEPOSIT</div>
            <div>+</div>
            <div>20% BONUS<br/> EACH CYCLE</div>
            <div>+</div>
            <div>60 USDT<br/> DEPOSIT and BONUS</div>
        </div>
        <div className="flex flex-col justify-center text-center">
        <div>15 days per cycle. 20% per cycle bonus.</div>
        <div>You will have to re-deposit every time after each cycle matures.</div>
        <div>Deposit should be either the same amount or bigger amount, in multiples of 50 USDT.</div>
        <div>After every 2 cycles, 1 extra day will be added to your cycle without any extra bonus. Cycle's maximum life would be 45 days.</div>
      </div>
      </div>
<div className="flex flex-row justify-center mt-5">
    
   {validity&&   <button onClick={handleSubmit} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Confirm</button>}
   {!validity &&  <button className="text-white bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  cursor-wait ">Confirm</button> }
      </div>
    </div>
  );
};
