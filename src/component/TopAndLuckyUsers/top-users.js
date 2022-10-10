import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'
import Web3Modal from "web3modal"
import { CONTRACTABI, CONTRACTADDRESS } from '../../contract';

export const TopUsers = () => {
    const [data,setdata] = useState();
    const [fetch,setfetched] = useState(true);
   
    useEffect(() => {
           const Fetchfunction = async () => {
                  const web3Modal = new Web3Modal()
                  const connection = await web3Modal.connect()
                  const provider = new ethers.providers.Web3Provider(connection)
                  const signer = provider.getSigner()
                  const contract = new ethers.Contract(CONTRACTADDRESS, CONTRACTABI, signer)
                  let ad = await signer.getAddress() ;
                  let day = await contract.getCurDay();
                  let dat=[];
                   let dat1 = await contract.dayTopUsers(day,0);
                   let dat2 = await contract.dayTopUsers(day,1);
                   let dat3 = await contract.dayTopUsers(day,2);
                    dat.push(dat1);
                    dat.push(dat2);
                    dat.push(dat3);
                   console.log("topuser",dat); 
                  setfetched(false);
              }
           Fetchfunction()
       },[]);
  return (
    <div className='text-center align-middle'>

<div className='mb-5 text-center text-white font-bold text-3xl'>Top Users </div>
{fetch && <div className='mb-5 text-center text-white font-bold text-2xl'>-----</div>}
{!fetch && data&& data[0]=='0x0000000000000000000000000000000000000000' && data[1]=='0x0000000000000000000000000000000000000000' && data[2]=='0x0000000000000000000000000000000000000000'&&
<div className='mb-5 text-center text-white font-bold text-2xl'>-----</div>
}
{!fetch && data && data.map((item,k)=>{
    if(item!="0x0000000000000000000000000000000000000000"){
        <div className='mb-5 text-center text-white font-bold text-2xl'>  {item} </div>
    }
})}
{!fetch &&!data && <div className='mb-5 text-center text-white font-bold text-2xl'>-----</div> }
    </div>
  )
}
