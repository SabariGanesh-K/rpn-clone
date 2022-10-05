import React from 'react'

export const DepositHistory = () => {
  return (
    <div className='bg-black h-screen text-white  '>
        <div className='mb-5 text-center text-white font-bold text-3xl'>DEPOSIT HISTORY</div>
        <div className='mr-3 bg-gray-700 w-screen '>
         <div>
        <div className='flex flex-row justify-evenly bg-gray-900 font-semibold'>
          <div>Amount</div>
          <div>Deposit Data</div>
          <div>Mature date</div>
        </div>
        <div className='flex flex-row justify-evenly'>
          <div>35USDT</div>
          <div>2022-08-31 07:42:06</div>
          <div>2022-08-31 07:42:06</div>
        </div>
        <div className='flex flex-row justify-evenly'>
          <div>20USDT</div>
          <div>2022-08-31 07:42:06</div>
          <div> 2022-08-31 07:42:06</div>
        </div>
        </div>
        </div>
    </div>
  )
}
