  import React, { useState } from "react";
  import {  Navbar } from "reactstrap";
  import {NavLink} from 'react-router-dom';

  import './header.css'
  import { useEffect } from "react";
  import { useContext } from "react";
  import { AppContext } from "../../context/AppConfig";




  export const DesktopHeader = () =>  {

    

      return (

        <>
        
        {/* <div className = "large-devices"> */}
        <Navbar  dark expand = "md">
        
        <div className="header-button-containers">
            
            <NavLink className = "nav-link" to = "/home">
            <button  className = "buttons-selected "  style = {{padding:'0rem',  color: 'goldenrod'}} >  Dashboard </button>
            </NavLink>
        
            <NavLink className = "nav-link" to = "/team">
            <button  className =  "buttons-selected " style = {{padding:'0rem',  color: 'goldenrod'}}    >  My Team performance </button>
            </NavLink>
        
            <NavLink className = "nav-link" to = "/deposithistory">
            <button  className = "buttons-selected " style = {{padding:'0rem',  color: 'goldenrod'}}   >  Deposit Details  </button>
            </NavLink>
  
            <a className = "nav-link" href="https://rpnwinner.com/assets/images/RPN%20Plan.pdf"  target="__blank">
            <button  className =  "buttons-selected "  style = {{padding:'0rem',  color: 'goldenrod'}}  >RPN plan  </button>
            </a>

            <a className = "nav-link" href="https://rpnwinner.com/assets/images/RPN%20White%20Paper.pdf"  target="__blank">
            <button  className ="buttons-selected " style = {{padding:'0rem',  color: 'goldenrod'}}   >  White paper  </button>
            </a>
            <a className = "nav-link" href="https://rpnwinner.com/assets/images/RPN%20Audit%20Report.pdf"  target="__blank">
            <button  className ="buttons-selected " style = {{padding:'0rem',  color: 'goldenrod'}}   >  Audit Report  </button>
            </a>
        
          </div>
          </Navbar>
        {/* </div> */}
      
        
        </>
        
      );
    }


  export default DesktopHeader;
