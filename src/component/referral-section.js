import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

export const Referral = () => {
    const [addr,setaddr] = useState("")
    const handleChange = (e) =>{
        setaddr(e.target.value)
    }
    const validity = addr.length>0;
  return (
    <div className="participant-section w-screen">
    <Container>
                     <div className='mb-5 text-center text-white font-bold text-3xl'>REFERRAL </div>
                     <div>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={addr}
          
            onChange={(e) => handleChange(e)}
            placeholder="Referrer Address"
          ></input>
          <div className="flex flex-row justify-center mt-5">
        {validity && <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">ADD</button> }
        {!validity &&  <button className="text-white bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  cursor-wait ">ADD</button> }
        </div>
        </div>
        <br/><br/><br/>
    </Container>
    </div>
  )
}
