import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'
import Web3Modal from "web3modal"
import { CONTRACTABI, CONTRACTADDRESS } from '../../contract';
export const DepositHistory = () => {
  const [data,setdata] = useState([]);
  const [fetch,setfetched] = useState(true);

  useEffect(() => {
         const Fetchfunction = async () => {
                const web3Modal = new Web3Modal()
                const connection = await web3Modal.connect()
                const provider = new ethers.providers.Web3Provider(connection)
                const signer = provider.getSigner();
                let ad = await signer.getAddress() ;
                const contract = new ethers.Contract(CONTRACTADDRESS, CONTRACTABI, signer)
                let ct = await contract.getOrderLength(ad);
                ct = parseInt(ct._hex);
                console.log("dcc",ct);
              let datas=[];
                let len = 0;
                if(ct>=10){
                  len=10;
                }
                else{
                  len=ct;
                }
          
                for (var i=0;i<len;i++){
                  let d = await contract.orderInfos(ad,i);
                  datas.push(d);
                }
                setdata(datas)
                console.log("fet",datas);
                setfetched(false)
             
            }
         Fetchfunction()
     },[]);
  return (
    <div className='bg-black h-screen text-white  '>
        <div className='mb-5 text-center text-white font-bold text-3xl'>DEPOSIT HISTORY</div>
        <div className='mr-3 bg-gray-700 w-screen '>
        <div className='flex flex-row justify-evenly bg-gray-900 font-semibold'>
          <div>Amount</div>
          <div>Deposit Data</div>
          <div>Mature date</div>
        </div>
{data.length>0&&         <div>
     
        <div className='flex flex-row justify-evenly'>
          <div>{data.amount} USDT</div>
          <div>{data.start}</div>
          <div>{data.unfreeze} </div>
        </div>
        <div className='flex flex-row justify-evenly'>
          <div>20USDT</div>
          <div>2022-08-31 07:42:06</div>
          <div> 2022-08-31 07:42:06</div>
        </div>
        </div>}
        {data.length==0 &&
         <div className='mb-5 text-center text-gray-300 font-bold text-xl bg-black'>No Deposits made</div>   }
        </div>
    </div>
  )
}
