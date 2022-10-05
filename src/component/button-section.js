import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaArrowUp, FaArrowDown, FaArrowsAltH, FaArrowsAlt } from 'react-icons/fa';
import { ethers } from 'ethers'
import Web3Modal from "web3modal"
import { CONTRACTADDRESS, CONTRACTABI } from '../contract'
import './styles.css'
import { NavLink } from 'react-router-dom';


function ButtonSection() {

    useEffect(() => {
        Fetchfunction()
    });

    const Fetchfunction = async () => {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(CONTRACTADDRESS, CONTRACTABI, signer)
        console.log("Contract=>", contract);
    }

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
        <Container className="button-section">
            <Row className='button-row'>
                <Col>
                <NavLink to = "/deposit">
                    <Button variant="outline-light" className='button'>
                        <FaArrowUp className='icon-button' /> <br></br>
                        DEPOSIT
                    </Button>
                    </NavLink>
                </Col>
                <Col>
                <NavLink to = "/withdraw">
                <Button variant="outline-light"  className='button'>
                    <FaArrowDown className='icon-button' /> <br></br>
                    WITHDRAW
                </Button>
                </NavLink>
                </Col>
            </Row>
            <Row>
                <Col>
                <NavLink to = "/DepositDev">
                    <Button variant="outline-light"  className='button'>
                        <FaArrowsAltH className='icon-button' /> <br></br>
                        DEPOSIT FUND
                    </Button>
                    </NavLink>
                </Col>
                <Col>
                <NavLink to = "/reservefund">
                    <Button variant="outline-light"  className='button'>
                        <FaArrowsAlt className='icon-button' /> <br></br>
                        RESERVE FUND
                    </Button>
                    </NavLink>
                </Col>
            </Row>
        </Container>
    );
}

export default ButtonSection;
