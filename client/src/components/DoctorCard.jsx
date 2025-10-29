import React from 'react'

function DoctorCard() {
  return (
    <div className='flex gap-2'>
      <div className= ' h-55 w-50 '>
        <img className='rounded-full h-50 w-50 p-6' src="https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074" alt="" />
         </div>
      <div className='h-50 w-150 '> 
        <div className='h-25 w-full p-8 justify-between flex gap-12 '>
<h2>Dr. anupriya shukla </h2>
 <h3>Fees : 3000/-</h3>
        </div>
        <hr />
        <div className='h-25 w-full flex p-8 justify-between '>
<div className='h-5 w-20 bg-green-400 '> rating</div>
<button className='border-2 h-10 w-35  bg-blue-300' >Consult us</button>
        </div>


      </div>
    </div>
  )
}

export default DoctorCard
