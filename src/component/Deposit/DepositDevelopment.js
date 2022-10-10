import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'
import Web3Modal from "web3modal"
import { CONTRACTABI, CONTRACTADDRESS } from '../../contract';

export const DepositDevelop = () => {
  const [amount, setamount] = useState(0);
  const [reciever,setreciever] = useState("");
  const validity = amount % 50 == 0 && amount >= 50  ;
  // const addrValidity = reciever
  const handleChange = (e) => {
    setamount(e.target.value);
  };
  const handleSubmit = () => {
    alert(validity);
  };
  const handleRecieverChange = (e) =>{
    setreciever(e.target.value);
  }
  const depositfund = async () => {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(CONTRACTADDRESS, CONTRACTABI, signer)

    const decimals = 18;
    const input = "999"; // Note: this is a string, e.g. user input
    const day = await contract.getCurDay();


    const depositamount = ethers.utils.parseUnits("1", 'ether')
    const transaction = await contract.dayLuckUsersDeposit(day, depositamount, {
        gasLimit: 1000000,
        gasPrice: ethers.utils.parseUnits('40', 'gwei')
    })
    await transaction.wait()

    console.log("Contract=>", contract, "Transaction=>", transaction)
}
const daytopuserrefferal = async() =>{
  const web3Modal = new Web3Modal()
  const connection = await web3Modal.connect()
  const provider = new ethers.providers.Web3Provider(connection)
  const signer = provider.getSigner()
  const contract = new ethers.Contract(CONTRACTADDRESS, CONTRACTABI, signer)
  let tx = await contract.DayTopUser(reciever, {
    gasLimit: 1000000,
    gasPrice: ethers.utils.parseUnits('40', 'gwei')
});
await tx.wait();

}

  return (
    <div className="bg-black text-white h-screen">
             <div className='mb-5 text-center text-white font-bold text-3xl'>DEPOSIT DEVLOPMENT</div>
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
          <span className="text-white font-semibold text-3xl">USDT</span>
        </div>
      </div>
      
      <div className="flex flex-row justify-center">
        {" "}
        {!validity && (
          <div className="text-red-700  font-semibold">
            Minimum withdraw 50 USDT. You can withdraw in multiples of 50 USDT.
          </div>
        )}
      </div>
      {/* <div className="bg-neutral-700 text-white">
        <div className="flex flex-row justify-evenly text-center">
          <div>
            50 <br />
            USDT
            <br /> DEPOSIT
          </div>
          <div>+</div>
          <div>
            20% BONUS
            <br /> EACH CYCLE
          </div>
          <div>+</div>
          <div>
            60 USDT
            <br /> DEPOSIT and BONUS
          </div>
        </div>
        <div className="flex flex-col justify-center text-center">
          <div>15 days per cycle. 20% per cycle bonus.</div>
          <div>
            You will have to re-deposit every time after each cycle matures.
          </div>
          <div>
            Deposit should be either the same amount or bigger amount, in
            multiples of 50 USDT.
          </div>
          <div>
            After every 2 cycles, 1 extra day will be added to your cycle
            without any extra bonus. Cycle's maximum life would be 45 days.
          </div>
        </div>
      </div> */}
      <div>
        Reciever address
      </div>
      <div>
      <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={reciever}
            type="text"
            onChange={(e) => handleRecieverChange(e)}
            placeholder="Amount in 50 multiples"
          ></input>
      </div>
      <div className="flex flex-row justify-center">
        {" "}
        {!reciever && (
          <div className="text-red-700  font-semibold">
            Enter a referral address
          </div>
        )}
      </div>
      <div className="flex flex-row justify-center mt-5">
        {validity && (
          <button
            onClick={handleSubmit}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Confirm
          </button>
        )}
        {!validity && (
          <button className="text-white bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  cursor-wait ">
            Confirm
          </button>
        )}
      </div>
    </div>
  );
};
