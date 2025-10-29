import React from 'react'
import Navbar from "../components/Navbar"
import DoctorCard from '../components/DoctorCard'
function Gynac() {
  return (
    <div>
      <Navbar/>

<h1 className='font-bold text-4xl p-8 capitalize ml-70'>Expert Care for Women’s Health, Every Step of the Way.</h1>
<h2 className='font-bold text-2xl ml-30 text-fuchsia-600'>Top Verified Gynecologists for you</h2>
<div className='p-20'>
    <DoctorCard/>
</div>
    </div>
  )
}

export default Gynac
