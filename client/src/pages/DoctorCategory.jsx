import React from 'react'
import doctorCategory from "../data/doctorCategory" 
import CategoryCard from '../components/CategoryCard'
function Category() {
  return (
    <div className='h-full w-full '>
    <div>
     <h1 className='font-extrabold p-5 ml-50 text-5xl'>We’ve Got the Right Doctor for Every Need</h1>   
<div className='ml-20 p-10'>
    <h2 className='font-medium text-2xl italic'>Book an appointment for an in-clinic consultation</h2>
    <p className='text-1xl'>Find experienced doctors across all specialties</p>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {doctorCategory.map((item) => (
          <CategoryCard key={item.id} type={item.type} image={item.image} description ={item.description}/>
        ))}
      </div>

</div>

    </div>
    </div>
  )
}

export default Category
