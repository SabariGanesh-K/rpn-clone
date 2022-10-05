import React, { useContext } from 'react'
import { AppConfig } from '../context/AppConfig';
import ButtonSection from './button-section';
import ContractSection from './contract-section';
import Header from './Header/Header';
import MyDetail from './my-detail';
import ParticipantSection from './participant-section';
import Topsection from './top-section';

export const Home = () => {
    const {data,signin} = useContext(AppConfig);
    console.log(data.length)
    return(
    // {data.address === "" && (
    //   <>
    //   <Header/>
    //     <div className='signin'>
       
    //         <button onClick={signin} className="signinbutton">
    //           Login Using Wallet
    //         </button>
         
    //     </div>
    //     </>
    //   )}


      // {data.address !== "" && (
        <>
        <Header/>
          <Topsection />
          <ContractSection />
          <ParticipantSection />
          <ButtonSection />
          <MyDetail />
        </>

      // )}
    )
    }
