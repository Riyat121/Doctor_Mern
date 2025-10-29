import React from 'react'

function About() {
  return (
   
      
     <section className="bg-gray-200 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        {/* <p className="text-lg text-gray-700">
          Our platform helps patients connect with doctors easily and securely.
        </p> */}
        <div className='flex gap-10 '>
          <div className='w-[50%]'>
          <h2 className='font-medium'>About BookMyDoc</h2>
          <p>At BookMyDoc, we believe that quality healthcare should be accessible to everyone, anytime, anywhere. Our mission is to simplify the way patients connect with healthcare professionals, offering a seamless experience from finding the right specialist to booking appointments and receiving personalized care.

We bring together a diverse network of experienced doctors and specialists, including dentists, gynecologists, dietitians, physiotherapists, orthopedists, and cardiologists, ensuring that every aspect of your health is covered. Each doctor profile includes detailed information, helping you make informed decisions about your healthcare.

Our platform is designed with convenience and trust in mind. With easy navigation, clear scheduling options, and reliable support, managing your health has never been easier. We also emphasize preventive care, patient education, and personalized treatment recommendations, empowering you to take control of your well-being.

Whether it’s a routine checkup, managing a chronic condition, or seeking expert advice. Your health, comfort, and peace of mind are our top priorities, and we strive to make healthcare simple, efficient, and patient-friendly.</p>
          </div>
          <div className='w-[50%]'>
            <img className='p-3' src="https://plus.unsplash.com/premium_photo-1661580561759-81f0cc557f42?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
