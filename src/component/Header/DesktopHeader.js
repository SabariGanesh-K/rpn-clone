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
        
            <NavLink className = "nav-link" to = "/depositdetails">
            <button  className = "buttons-selected " style = {{padding:'0rem',  color: 'goldenrod'}}   >  Deposit Details  </button>
            </NavLink>
  
            <NavLink className = "nav-link" to = "/rpnplan">
            <button  className =  "buttons-selected "  style = {{padding:'0rem',  color: 'goldenrod'}}  >RPN plan  </button>
            </NavLink>

            <NavLink className = "nav-link" to = "/wpaper">
            <button  className ="buttons-selected " style = {{padding:'0rem',  color: 'goldenrod'}}   >  White paper  </button>
            </NavLink>
            <NavLink className = "nav-link" to = "/auditrep">
            <button  className ="buttons-selected " style = {{padding:'0rem',  color: 'goldenrod'}}   >  Audit Report  </button>
            </NavLink>
        
          </div>
          </Navbar>
        {/* </div> */}
      
        
        </>
        
      );
    }


  export default DesktopHeader;
