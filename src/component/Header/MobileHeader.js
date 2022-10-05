import React ,{useEffect, useState}from 'react';
import { NavLink } from 'react-router-dom';
import cross from './assets/cross.png';
import menu from './assets/menu.png';


const MobileHeader = () =>{
    const [togglemenu,settogglemenu] = useState(false);
    // const {status,setstatus} = useContext(AppContext)
    // console.log(status===0)/
    function toggle(){
        // console.log(index,status)
        // if (!isNaN(index)){
        //     setstatus(index)
        // }
     
        settogglemenu(!togglemenu);

  
    }
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])


   
    
    return(
        <div style = {{position:'fixed',margin:'2%'}} className='mobile-header-master-container'>
        {togglemenu ? <img  src = {cross} onClick={toggle} alt = "on"/>:<img src = {menu} onClick={toggle} alt = "off"/> }
        {togglemenu && (
            <div className='mobileheadercontainer'>
                {/* <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}> */}
                <NavLink className = "no-link" to = "/home" > <button  onClick={toggle}  className='mobileheaderitem'  style = {{fontSize:'+3.5rem'}} >Dashboard</button></NavLink>
                {/* </ScrollAnimation> */}
                {/* <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}> */}
                <NavLink className = "no-link" to = "/team" > <button  onClick={toggle}  className='mobileheaderitem'  style = {{fontSize:'3.5rem'}}  > Team</button></NavLink>
                {/* </ScrollAnimation> */}
                {/* <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}> */}
                <NavLink className = "no-link" to = "/depositdetails" > <button  onClick={toggle}  className='mobileheaderitem'  style = {{fontSize:'3.5rem'}} > Deposit Details</button></NavLink>
                {/* </ScrollAnimation> */}
                {/* <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}> */}
                <NavLink className = "no-link" to = "/rpnplan"> <button  onClick={toggle}  className='mobileheaderitem'  style = {{fontSize:'3.5rem'}} >RPN plan</button></NavLink>
  {/* </ScrollAnimation> */}
                <NavLink className = "no-link" to = "/wpaper" > <button  onClick={toggle} className='mobileheaderitem'  style = {{fontSize:'3.5rem'}} > White paper</button></NavLink>
         
                <NavLink className = "no-link" to = "/auditrep" > <button   onClick={toggle} className='mobileheaderitem'  style = {{fontSize:'3.5rem'}} > Audit Report</button></NavLink>
          
            </div>
            
        ) }
        </div>
    )
}

export default MobileHeader;