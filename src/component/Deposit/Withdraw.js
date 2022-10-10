import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'
import Web3Modal from "web3modal"
import { CONTRACTABI, CONTRACTADDRESS } from '../../contract';
export const Withdraw = () => {
       const [rewards,setrewards] = useState();
       const [fetch,setfetched] = useState(true);
       const [l4,setl4] = useState(0);
       const [l5,setl5] = useState(0);
       const [tot,settot]=useState(0);
       useEffect(() => {
              const Fetchfunction = async () => {
                     const web3Modal = new Web3Modal()
                     const connection = await web3Modal.connect()
                     const provider = new ethers.providers.Web3Provider(connection)
                     const signer = provider.getSigner()
                     const contract = new ethers.Contract(CONTRACTADDRESS, CONTRACTABI, signer)
                     let ad = await signer.getAddress() ;
                     // alert(ad)
                     let data= await contract.rewardInfo(ad);
                     setrewards(data);
                     setfetched(false)
                     console.log(rewards)
                     // alert("yes",rewards.direct.length)
                     setl4(parseInt(rewards.level4Released._hex))
                     setl5(parseInt(rewards.level5Released._hex))
                     let sum = l4+l5+ parseInt(rewards.capitals._hex)+parseInt(rewards.statics._hex)+
                     +parseInt(rewards.directs._hex)+parseInt(rewards.star._hex)+parseInt(rewards.luck._hex)+parseInt(rewards.top._hex);           
                     // alert(ct)
                     settot(sum)
                 }
              Fetchfunction()
          },[]);
      
      
  return (
    <div className='bg-black text-blue-500 text-center h-screen'>
               <div className='mb-5 text-center text-white font-bold text-3xl'>WITHDRAW</div>
        <div className='flex flex-row justify-center mb-1'>
        <div>Unlock Investment</div>
<div className='mr-3'>:-</div>
 <div className = "text-white">{fetch? "---":  parseInt(rewards.capitals._hex)}</div>
        </div>

        <div className='flex flex-row justify-center mb-1  '>
        <div>Cycle reward</div>
<div className='mr-3'>:-</div>
 <div className = "text-white">{fetch? "---":parseInt(rewards.statics._hex)}</div>
        </div>

        <div className='flex flex-row justify-center mb-1  '>
        <div>Sapphire</div>
<div className='mr-3'>:-</div>
 <div className = "text-white">{fetch? "---":parseInt(rewards.directs._hex)}</div>
        </div>

        <div className='flex flex-row justify-center mb-1  '>
        <div>Ruby</div>
<div className='mr-3'>:-</div>
 <div className = "text-white">{fetch? "---": l4/7 }</div>
        </div>

        <div className='flex flex-row justify-center mb-1  '>
        <div>Emerald</div>
<div className='mr-3'>:-</div>
 <div className = "text-white">{fetch? "---":2*l4/7}</div>
        </div>

        <div className='flex flex-row justify-center mb-1  '>
        <div>Diamond</div>
<div className='mr-3'>:-</div>
 <div className = "text-white">{fetch? "---":3*l4/7 }</div>
        </div>

        <div className='flex flex-row justify-center mb-1  '>
        <div>Royal Diamond</div>
<div className='mr-3'>:-</div>
 <div className = "text-white">{fetch? "---":l4/7}</div>
        </div>

        <div className='flex flex-row justify-center mb-1  '>
        <div>6-20 level</div>
<div className='mr-3'>:-</div>
 <div className = "text-white">{fetch? "---":l5}</div>
        </div>

        <div className='flex flex-row justify-center mb-1  '>
        <div>Daily Lucky Pool</div>
<div className='mr-3'>:-</div>
 <div className = "text-white">{fetch? "---":parseInt(rewards.luck._hex)}</div>
        </div>

        <div className='flex flex-row justify-center mb-1  '>
        <div>Daily Royal Diamond Pool</div>
<div className='mr-3'>:-</div>
 <div className = "text-white">{fetch? "---":parseInt(rewards.directs._hex)}</div>
        </div>

        <div className='flex flex-row justify-center mb-1  '>
        <div>Daily Diamond Pool</div>
<div className='mr-3'>:-</div>
 <div className = "text-white">{fetch? "---":parseInt(rewards.star._hex)}</div>
        </div>


        <div className='flex flex-row justify-center mb-1  '>
        <div>Daily Top 5 Pool</div>
<div className='mr-3'>:-</div>
 <div className = "text-white">{fetch? "---":parseInt(rewards.top._hex)}</div>
        </div>


        <div className='flex flex-row justify-center mb-1  '>
        <div>Daily Royalty Pool</div>
<div className='mr-3'>:-</div>
 <div className = "text-white">{fetch? "---":parseInt(rewards.directs._hex)}</div>
        </div>


        <div className='flex flex-row justify-center mb-1  '>
        <div>ROI ON ROI</div>
<div className='mr-3'>:-</div>
 <div className = "text-white">{fetch? "---":parseInt(rewards.directs._hex)}</div>
        </div>


        <div className='flex flex-row justify-center mb-1  '>
        <div>Reserve Fund</div>
<div className='mr-3'>:-</div>
 <div className = "text-white">{fetch? "---":parseInt(rewards.directs._hex)}</div>
        </div>

        <div className='flex flex-row justify-center mb-1  '>
        <div>TOTAL</div>
<div className='mr-3'>:-</div>
 <div className = "text-white">{fetch? "---":tot}</div>
        </div>
        <div className='flex flex-row justify-center'>
        <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">WITHDRAW</button>
        </div>
    </div>
  )
}
