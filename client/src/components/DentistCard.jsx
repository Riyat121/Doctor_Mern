import React from 'react'

function DentistCard({ dentist }) {
  return (
      <div className="border-2 border-gray-200 p-4 rounded-xl shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{dentist.name}</h2>
      <p className="text-gray-600">{dentist.qualifications}</p>
      <p>Experience: {dentist.experience_years} years</p>
      <p>Clinic: {dentist.clinic}</p>
      <p>Fees: ₹{dentist.fees_inr}</p>
      <p>Rating: ⭐{dentist.rating}</p>
      <p className="text-sm text-gray-500 mt-2">{dentist.services}</p>
    </div>
  )
}

export default DentistCard;
