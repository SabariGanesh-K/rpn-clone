import React from 'react'

export const Reservefund = () => {
  return (
    <div className='bg-black h-screen text-white  '>
        <div className='mr-3 bg-gray-700 w-screen '>
         <div>
        <div className='flex flex-row justify-evenly bg-gray-900 font-semibold'>
          <div>Reserve amount</div>
          <div>Claimed</div>
          <div>Pending amount</div>
        </div>
        <div className='flex flex-row justify-evenly'>
          <div>35USDT</div>
          <div>35USDT</div>
          <div>0USDT</div>
        </div>
        <div className='flex flex-row justify-evenly'>
          <div>20USDT</div>
          <div>20USDT</div>
          <div>0 USDT</div>
        </div>
        </div>
        </div>
    </div>
  )
}
