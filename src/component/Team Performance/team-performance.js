import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'
import Web3Modal from "web3modal"
import { CONTRACTABI, CONTRACTADDRESS } from '../../contract';

export const TeamPerformance = () => {
    const [data,setdata] = useState([]);
    const [max,setmax] = useState(0);
    const [other,setother] = useState(0);
    const [tot,settot]= useState(0);
    const [teamNum,setTeamNum] = useState(0);
    const [persDep,setPersDep] = useState(0);
    const [current,setcurrent]= useState(0);
    useEffect(() => {
           const Fetchfunction = async () => {
                  const web3Modal = new Web3Modal()
                  const connection = await web3Modal.connect()
                  const provider = new ethers.providers.Web3Provider(connection)
                  const signer = provider.getSigner()
                  
                  const contract = new ethers.Contract(CONTRACTADDRESS, CONTRACTABI, signer)
                  let ad = await signer.getAddress() ;
                    let dat = await contract.getTeamDeposit(ad);
                    console.log("tean",dat);
                    setmax(parseInt(dat[0]._hex))
                    setother(parseInt(dat[1]._hex))
                    settot(parseInt(dat[2]._hex))
                    let userdata = await contract.userInfo(ad);
                    setTeamNum(parseInt(userdata.teamNum._hex));
                    setPersDep(parseInt(userdata.teamTotalDeposit));
                    // setteamDep(parseInt(userdata.))
                    setcurrent(parseInt(userdata.level._hex))

              }
           Fetchfunction()
       },[]);
    // const current = 2;
    const level = {1:'ruby',2:'ruby',3:'emerald',4:'diamond',5:'royal diamond'}
    const levelDat = {1:{pers:400,mem:25,all:5000},2:{pers:400,mem:25,all:5000},3:{pers:800,mem:50,all:10000},
    4:{pers:1000,mem:100,all:20000},2:{pers:2000,mem:200,all:40000}}
  return (
    <div className='h-screen bg-black text-white text-center'>
          <div className='mb-5 text-center text-white font-bold text-3xl'>TEAM </div>
          <div className='flex flex-row justify-evenly'>
            <div> <div>Total Sales</div>
            <div>{tot}</div></div>
            <div> <div>Total Downlines</div>
            <div>0</div></div>
           
          </div>
          <div className='flex flex-row justify-evenly'>
            <div> <div>Strong team</div>
            <div> {max} </div></div>
            <div> <div>Other Team</div>
            <div> {other} </div></div>
           
          </div>

          <div className='mb-5 text-center text-white font-bold text-3xl'>My next {level[1]} Requirement </div>
          <div className='flex flex-row justify-evenly'>
            <div> <div>Strong line team</div>
            <div>0</div></div>
            <div> <div>All Team</div>
            <div> {(levelDat[current+1].all-tot >0)?(levelDat[current+1].all-tot):"DONE"} </div></div>
           
          </div>
          <div className='flex flex-row justify-evenly'>
            <div> <div>Total more members</div>
            <div> {(levelDat[current+1].mem-teamNum >0)?(levelDat[current+1].mem-teamNum):"DONE"}</div></div>
            <div> <div>Own Investments</div>
            <div>{(levelDat[current+1].pers-persDep >0)?(levelDat[current+1].pers-persDep):"DONE"}</div></div>
           
          </div>

    </div>
  )
}
