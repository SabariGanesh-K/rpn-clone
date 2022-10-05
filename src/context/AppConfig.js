import { createContext, useEffect, useState } from 'react';
// import { CONTRACTABI } from '../contract';
import { ethers } from 'ethers'

import Web3Modal from "web3modal"
import { CONTRACTADDRESS, CONTRACTABI } from '../contract'
// export  const AppConfig =  createContext();
export const AppConfig = createContext();
export const AppProvider = ({ children }) => {
    // 0x5635551BDeF2A21536148Bf63282f40f72318f2f
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const [luckyuser,setluckyusers] = useState([]);
    const [dtopusers,setdtopusers] = useState([])
    // const contractAddress = '0x5635551BDeF2A21536148Bf63282f40f72318f2f';
    const contractAddress=CONTRACTADDRESS;
    const ABI = CONTRACTABI;
      const contract = new ethers.Contract(contractAddress, ABI, signer);  
    const [data, setdata] = useState({
        address: "",
        Balance: null,
      });
      const [participants,setparticipants] = useState("---")
      const [starfund,setstarfund] = useState("---");
      const [luckfund,setluckfund] = useState("---");
      const [topfund,settopfund] = useState("---");
      const [royaltyfund,setroyaltyfund] = useState("---");
      const [royalstarfund,setroyalstarfund] = useState("---")
    const [dtop,setdtop] = useState([]);
      useEffect(() => {
        const requestAccounts = async () => {
          await provider.send("eth_requestAccounts", []);
          // setloggedinstatus(true)
        }
        const getData = async() =>{
           let ct= await contract.getDepositorsLength();
            setparticipants(ct)
            let cd = await contract.getCurDay();
            let dat = await contract.dayLuckUsers[cd];
            setluckyusers(dat);
            let dtop = await contract.dayTopUsers();
            setdtop(dtop);
            let sfund = await contract.starPool();
            setstarfund(sfund);
            let lfund=contract.luckPool();
            setluckfund(lfund);
            let tfund=await contract.topPool();
            settopfund(tfund);
        }
        requestAccounts().catch(console.error)
        getData().catch(console.error)
      },[]);
    
      const signin = () => {
        if (window.ethereum) {
          window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((res) => accountChangeHandler(res[0]));
        } else {
          alert("install metamask extension!!");
        }
      }
    
      const getbalance = (address) => {
        window.ethereum
          .request({
            method: "eth_getBalance",
            params: [address, "latest"]
          })
          .then((balance) => {
            setdata({
              Balance: ethers.utils.formatEther(balance),
            });
          });
      };
    
      const accountChangeHandler = (account) => {
        setdata({
          address: account,
        });
    
        getbalance(account);
      };
    useEffect(() => {
      const Fetchfunction = async () => {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(CONTRACTADDRESS, CONTRACTABI, signer)
        console.log("Contract=>", contract);
    }
        Fetchfunction()
    });

  

    const deposit = async () => {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(CONTRACTADDRESS, CONTRACTABI, signer)
        console.log("Contract=>", contract);

        const depositamount = ethers.utils.parseUnits("1", 'ether')
        const transaction = await contract.DayLuckyUser(depositamount, {
            gasLimit: 1000000,
            gasPrice: ethers.utils.parseUnits('40', 'gwei')
        })
        await transaction.wait()

        console.log("Contract=>", contract, "Transaction=>", transaction)
    }


    const withdrawn = async () => {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(CONTRACTADDRESS, CONTRACTABI, signer)

        console.log("Contract=>", contract);

        // const depositamount = ethers.utils.parseUnits("1", 'ether')
        const transaction = await contract.Depositors({
            gasLimit: 1000000,
            gasPrice: ethers.utils.parseUnits('40', 'gwei')
        })
        await transaction.wait()

        console.log("Contract=>", contract, "Transaction=>", transaction)
    }


    const depositfund = async () => {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(CONTRACTADDRESS, CONTRACTABI, signer)

        const decimals = 18;
        const input = "999"; // Note: this is a string, e.g. user input
        const day = ethers.utils.parseUnits(input, decimals)


        const depositamount = ethers.utils.parseUnits("1", 'ether')
        const transaction = await contract.dayLuckUsersDeposit(day.toString(), depositamount, {
            gasLimit: 1000000,
            gasPrice: ethers.utils.parseUnits('40', 'gwei')
        })
        await transaction.wait()

        console.log("Contract=>", contract, "Transaction=>", transaction)
    }


    const reservefund = async () => {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(CONTRACTADDRESS, CONTRACTABI, signer)

        console.log("Contract=>", contract);

        // const depositamount = ethers.utils.parseUnits("1", 'ether')
        const transaction = await contract.isFreezeReward({
            gasLimit: 1000000,
            gasPrice: ethers.utils.parseUnits('40', 'gwei')
        })
        await transaction.wait()

        console.log("Contract=>", contract, "Transaction=>", transaction)
    }


    return (
        <AppConfig.Provider
          value={{signin,data,deposit,withdrawn,depositfund}}>{children}</AppConfig.Provider>
    )
}