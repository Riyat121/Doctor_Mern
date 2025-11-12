import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DoctorList = () => {
  const { category } = useParams();
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Map frontend category names to backend endpoints
const apiEndpoints = {
  dentist: "/api/dentists",
  gynecologist: "/api/gynecologists",
  cardiologist: "/api/cardiologists",
  dietitian: "/api/dietitions",
  orthopedist: "/api/orthopedists",
  physiotherapist: "/api/physiotherapists",
};

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const endpoint = apiEndpoints[category.toLowerCase()];
        if (!endpoint) {
          console.error("Invalid category:", category);
          return;
        }

        const res = await axios.get(`${import.meta.env.VITE_API_URL}${endpoint}`);
        setDoctors(res.data);
      } catch (err) {
        console.error("Error fetching doctors:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [category]);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
<div className="p-8 max-w-3xl mx-auto">
  <h1 className="text-3xl font-bold mb-8 capitalize text-center text-blue-700">
    {category} Specialists
  </h1>

  {doctors.length === 0 ? (
    <p className="text-center text-gray-500 text-lg">
      No doctors found for this category.
    </p>
  ) : (
    <div className="space-y-5">
      {doctors.map((doc) => (
        <div
          key={doc._id}
          className="flex items-center gap-5 bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200"
        >
          {/* Doctor Image */}
          {doc.image ? (
            <img
              src={doc.image}
              alt={doc.name}
              className="w-16 h-16 rounded-full object-cover border"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xl font-bold">
              {doc.name.charAt(0).toUpperCase()}
            </div>
          )}

          {/* Doctor Info */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800">
              Dr. {doc.name}
            </h2>
            <p className="text-gray-600 text-sm">{doc.qualifications}</p>

            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-700">
              <p>
                <span className="font-medium">Experience:</span>{" "}
                {doc.experience_years || doc.experience} yrs
              </p>
              <p>
                <span className="font-medium">Rating:</span>{" "}
                {doc.rating ? `${doc.rating} ⭐` : "N/A"}
              </p>
              <p>
                <span className="font-medium">Fees:</span> ₹
                {doc.fees_inr || "—"}
              </p>
            </div>

            <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-md transition duration-200">
              Book Appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</div>



  );
};

export default DoctorList;
