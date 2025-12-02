import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import API from "../api";

function DoctorDetails() {
  const { id } = useParams(); // gets id from the url 
  const navigate = useNavigate(); //navigate or direct you 
  const location = useLocation(); // gives access to route state if passed during navigation
  const initialDoctor = location.state?.doctor || null;
  const categoryFromState = location.state?.category || null;

  const [doctor, setDoctor] = useState(initialDoctor);
  const [loading, setLoading] = useState(!initialDoctor);

  const apiEndpoints = {
    dentist: "/dentists",
    gynecologist: "/gynecologists",
    cardiologist: "/cardiologists",
    dietitian: "/dietitions",
    orthopedist: "/orthopedists",
    physiotherapist: "/physiotherapists",
  };

  useEffect(() => {
    if (doctor) return;

    const fetchDoctorDetails = async () => {
      setLoading(true);
      try {
        const categoriesToCheck = categoryFromState
          ? [categoryFromState]
          : Object.keys(apiEndpoints);

        for (const categoryKey of categoriesToCheck) {
          const endpoint = apiEndpoints[categoryKey];
          if (!endpoint) continue;
          const res = await API.get(endpoint);
          const found = res.data.find((doc) => doc._id === id);
          if (found) {
            setDoctor(found);
            break;
          }
        }
      } catch (error) {
        console.error("Error fetching details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorDetails();
  }, [doctor, id, categoryFromState]);

  if (loading)
    return <p className="text-center text-lg font-medium mt-10">Loading...</p>;

  if (!doctor)
    return (
      <p className="text-center text-red-500 mt-10">
        Doctor details not found.
      </p>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      {/* Doctor Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={
            doctor.image ||
            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          }
          alt={doctor.name}
          className="w-40 h-40 rounded-full border object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dr. {doctor.name}</h1>
          <p className="text-gray-600 mt-2">{doctor.qualifications}</p>
          <p className="text-gray-500 capitalize">
            {doctor.specialization || "Specialist"}
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            {doctor.services }
          </p>

          {/* Experience + Rating + Fees */}
          <div className="flex flex-wrap gap-5 mt-4 text-gray-700 text-sm">
            <p>
              <span className="font-semibold">Experience:</span>{" "}
              {doctor.experience_years || doctor.experience || "N/A"} yrs
            </p>
            <p>
              <span className="font-semibold">Rating:</span>{" "}
              {doctor.rating ? `${doctor.rating} ⭐` : "N/A"}
            </p>
            <p>
              <span className="font-semibold">Consultation Fees:</span> ₹
              {doctor.fees_inr || "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-700">
          Available Schedule
        </h2>
        {doctor.schedule && doctor.schedule.length > 0 ? (
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            {doctor.schedule.map((slot, i) => (
              <li key={i}>{slot}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No schedule available.</p>
        )}
      </div>

      {/* Booking Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate(`/book/${doctor._id}`)}
          className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-2.5 rounded-md shadow-md transition-all duration-200"
        >
          Book Appointment
        </button>
        <button
          onClick={() => navigate(-1)}
          className="ml-4 bg-gray-200 hover:bg-gray-300 text-gray-800 text-lg px-6 py-2 rounded-md transition-all duration-200"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default DoctorDetails;
