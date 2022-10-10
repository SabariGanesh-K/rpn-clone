import 'bootstrap/dist/css/bootstrap.min.css';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'
import Web3Modal from "web3modal"
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import { FaStar } from 'react-icons/fa';
import './styles.css'
// import TronWeb from 'tronweb';
import StarRatings from 'react-star-ratings';
import { CONTRACTABI, CONTRACTADDRESS } from '../contract';
// Hey!!!I am earning 20% income on my investment , every fortnight. That's whopping 40% per month.Want to know more? Call or write to me now!!!Better still you can open your TronLinkPro and under Dapp section copy and paste following link and register now, it's absolutly free to join.  https://rpnwinner.com?ref=0x29caee3e4996e5a506c4099dc181ccf298deb3be
function MyDetail() {
    const [rewards,setrewards] = useState();
    const [fetch,setfetched] = useState(true);
    const [usdbal,setusdbal] = useState(0);
    const doNothing = () =>{
            
    }
    useEffect(() => {
      
        const Fetchfunction = async () => {
               const web3Modal = new Web3Modal()
               const connection = await web3Modal.connect()
               const provider = new ethers.providers.Web3Provider(connection)
               const signer = provider.getSigner()
               const contract = new ethers.Contract(CONTRACTADDRESS, CONTRACTABI, signer)
               let ad = await signer.getAddress() ;
               // alert(ad)
               let data= await contract.userInfo(ad);

               setrewards(data);
               setfetched(false)
               let bal1 = await contract.usdt.balanceOf(ad);
               setusdbal(bal1);


             
    
           }
        Fetchfunction()
    },[]);
    return (
        <Container className="my-detail">
            <Row>
                <Table >
                    <thead>
                        <tr>
                            <th><center className='text'>MY DETAILS</center></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text'>Level <span className='text-details'><StarRatings
          rating={ fetch?0: parseInt(rewards.level._hex)}
          starRatedColor="blue"
          changeRating={doNothing}
          numberOfStars={5}
          name='rating'
        /></span></td>
                        </tr>
                        <tr>
                            <td className='text'>Current Income <span className='text-details'> $ {fetch? "---":  parseInt(rewards.totalRevenue._hex)}</span></td>
                        </tr>
                        <tr>
                            <td className='text'>Total Income <span className='text-details'> ${fetch? "---":  parseInt(rewards.totalRevenue._hex)}</span></td>
                        </tr>
                        <tr>
                            <td className='text'>TRX Balance <span className='text-details'> $ 0</span></td>
                        </tr>
                        <tr>
                            <td className='text'>USDT Balance <span className='text-details'>$ 0</span></td>
                        </tr>
                        <tr>
                            <td className='text'>Redeposit Time <span className='text-details'> {fetch? "---":  parseInt(rewards.start._hex)} </span></td>
                        </tr>
                        <tr>
                            <td className='text'>My Referal <span onClick={()=>navigator.clipboard.writeText('https://rpnwinner.com?ref=0x29caee3e4996e5a506c4099dc181ccf298deb3be')} className='text-details cursor-pointer'>https://rpnwinner.com?ref=0x29caee3e4996e5a506c4099dc181ccf298deb3be</span></td>
                        </tr>
                        <tr className='flex flex-row justify-center'>

                      <a className='cursor-pointer'  href ="https://wa.me/?text=Hello%20there!%0AI%20am%20earning%2020%25%20on%20my%20investment%20every%20fortnight.%0AThats%20whopping%2040%25%20!%0A%0ACall%20%2F%20write%20me%20to%20know%20more%20!%0A%0AYou%20can%20still%20open%20your%20Tron%20%2C%20go%20to%20home%20page%20and%20refer%20to%20Referral%20section%20with%20my%20%0Aaddress%200x1234%20and%20register%20now!%20Its%20absolutely%20free!%0A
">  <i   className="fa fa-whatsapp" aria-hidden="true"></i></a> 
  <a className='cursor-pointer'  href ="https://wa.me/?text=Hello%20there!%0AI%20am%20earning%2020%25%20on%20my%20investment%20every%20fortnight.%0AThats%20whopping%2040%25%20!%0A%0ACall%20%2F%20write%20me%20to%20know%20more%20!%0A%0AYou%20can%20still%20open%20your%20Tron%20%2C%20go%20to%20home%20page%20and%20refer%20to%20Referral%20section%20with%20my%20%0Aaddress%200x1234%20and%20register%20now!%20Its%20absolutely%20free!%0A
">  <i   className="fa fa-instagram" aria-hidden="true"></i></a> 
  <a className='cursor-pointer'  href ="https://wa.me/?text=Hello%20there!%0AI%20am%20earning%2020%25%20on%20my%20investment%20every%20fortnight.%0AThats%20whopping%2040%25%20!%0A%0ACall%20%2F%20write%20me%20to%20know%20more%20!%0A%0AYou%20can%20still%20open%20your%20Tron%20%2C%20go%20to%20home%20page%20and%20refer%20to%20Referral%20section%20with%20my%20%0Aaddress%200x1234%20and%20register%20now!%20Its%20absolutely%20free!%0A
">  <i   className="fa fa-telegram" aria-hidden="true"></i></a> 
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}

export default MyDetail;
