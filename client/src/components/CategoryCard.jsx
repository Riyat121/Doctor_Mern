import { Link } from "react-router-dom";

function CategoryCard({ image, type, description }) {
  return (
    <div className="p-4">
      <Link to={`/category/${type.toLowerCase()}`}>
        <div className="h-96 w-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gray-100 flex flex-col items-center">
          
          <div className="h-60 w-full flex justify-center items-center overflow-hidden">
            <img
              className="object-cover h-full w-full rounded-t-2xl"
              src={image}
              alt={type}
            />
          </div>

          <div className="p-4 text-center">
            <p className="text-2xl font-semibold">{type}</p>
            <p className="text-sm font-light italic mt-2">{description}</p>
          </div>

        </div>
      </Link>
    </div>
  );
}

export default CategoryCard;

