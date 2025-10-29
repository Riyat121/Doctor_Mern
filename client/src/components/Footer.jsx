import React from 'react'
import { FaSuitcaseMedical } from "react-icons/fa6";
function Footer() {
  return (
   
    <div className='min-w-full h-[100%]  '>
<div className=' p-10 px-16 min-h-[100%]  flex justify-between gap-6'>
<div>
    <h2 className='font-medium'>BookMyDoc</h2>
    <ul>
        <li>About</li>
        <li>FAQs</li>
        <li>Privacy Policy</li>
        <li>Terms and Conditions</li>
        <li>Enterpreneur</li>
    </ul>

</div>
<div>
    <h2 className='font-medium'>Patients</h2>
  <ul>
        <li>Login</li>
        <li>Search for Doctors</li>
        
    </ul>

</div>
<div>
    <h2 className='font-medium'>Doctors</h2>
     <ul>
         <li>Login</li>
        <li>Register</li>
     </ul>
</div>
<div>
    <h2 className='font-medium'>Hospital</h2>
      <ul>
        <li>Login</li>
        <li>Manage Hospital</li>
        
    </ul>
</div>

<div>
<h2 className='font-medium'>clinic</h2>
 <ul>
        <li>Login</li>
        <li>Register</li>
        
    </ul>
</div>
<div>
    <h2 className='font-medium'>Follow Us On</h2>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Mail</li>
        <li>Youtube</li>
        <li>LinkedIN</li>
    </ul>
</div>
</div>
<div className='items-center  ml-[40%] line-clamp-2'>
    <h1 className='font-extrabold gap-2 flex text-4xl'>BOOKMYDOC <span><FaSuitcaseMedical /></span> </h1>
   
<p>Copyright @2025 | All rights reserved</p>
</div>
<br />
<br />
<br />
    </div>
    
  )
}

export default Footer
