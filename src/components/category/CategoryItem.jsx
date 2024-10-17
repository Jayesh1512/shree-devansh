import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ title, description, image }) => {
    const navigate = useNavigate();
    return (
        <div className="w-[80vw] sm:w-[50vw] h-[60vh] flex-shrink-0 flex flex-col sm:flex-row bg-blend-normal rounded-lg">
            <img 
                src={image} 
                alt={title} 
                className="w-full sm:w-1/2 h-full object-cover"
            />
            <div className="flex flex-col justify-center p-6 sm:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
                <p className="mt-4 text-gray-600">{description}</p>
                <button className="mt-6 py-2 w-1/2 bg-[#271212] text-white font-semibold rounded-full hover:bg-[#3e1e1e] flex items-center justify-center gap-2 group"
                onClick={() => navigate("/product")}>
                    Get 
                    <span className="transition-transform duration-300 transform group-hover:translate-x-2">
                        <FaArrowRightLong />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default CategoryItem;
