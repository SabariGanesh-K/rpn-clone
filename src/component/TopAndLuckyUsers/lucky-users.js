import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'
import Web3Modal from "web3modal"
import { CONTRACTABI, CONTRACTADDRESS } from '../../contract';
export const LuckyUsers = () => {
    const [data,setdata] = useState([]);
    const [fetch,setfetched] = useState(true);
   
    useEffect(() => {
           const Fetchfunction = async () => {
                  const web3Modal = new Web3Modal()
                  const connection = await web3Modal.connect()
                  const provider = new ethers.providers.Web3Provider(connection)
                  const signer = provider.getSigner()
                  const contract = new ethers.Contract(CONTRACTADDRESS, CONTRACTABI, signer)
                //   let ad = await signer.getAddress() ;
                  let day = await contract.getCurDay();
                  let len = await contract.getDayLuckLength();
                  let dat=[];
                for (var i=0;i<len;i++){
                    let dat1 = await contract.dayLuckUsers(day,i);
                    dat.push(dat1);
                }
                 
          

                  setfetched(false);
              }
           Fetchfunction()
       },[]);
  return (
    <div className='text-center align-middle'>

<div className='mb-5 text-center text-white font-bold text-3xl'>Lucky Users </div>
{!fetch || data.length==0&&
<div className='mb-5 text-center text-white font-bold text-2xl'>-----</div>
}
{data.length>0&&data.map((item,k)=>{
    if(item!="0x0000000000000000000000000000000000000000"){
        <div key = {k}>
        <div className='mb-5 text-center text-white font-bold text-2xl'> {item} </div>
        </div>
    }
})}
    </div>
  )
}
