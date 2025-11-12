import { Link } from "react-router-dom";
import categories from "../data/doctorCategory"; // Ensure correct path & export name

function DoctorCategory() {
  return (
    <div className="p-6 md:p-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Choose a Specialist
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.type.toLowerCase()}`}
            className="flex flex-col w-80 ml-20 bg-white  rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Image */}
            <div className="h-48 sm:h-56 md:h-64 w-full">
              <img
                src={category.image}
                alt={category.type}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col flex-1 p-4 md:p-5 text-center">
              <h2 className="text-lg md:text-xl font-semibold capitalize mb-2 text-gray-800">
                {category.type}
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DoctorCategory;
