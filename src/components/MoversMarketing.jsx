import { Link } from "react-router-dom";
export default function MoversMarketing() {
    const gradientStyle ={
        background:  "linear-gradient(to right, #434343 0%, black 100%)"
    }
    return (

        <div className="py-20 bg-black" style={gradientStyle}
        >
        <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-2 text-white">
           Movers App for Companies
        </h2>
        <h3 className="text-2xl mb-8 text-gray-200">
         Get more customers, Improve your business
        </h3>
        <Link to="/signup">
        <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
          Sign Up
        </button>
        </Link>

      </div>
      </div>
    );
}