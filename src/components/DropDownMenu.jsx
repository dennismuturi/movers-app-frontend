import { useState } from "react";
import { Link } from "react-router-dom";

export default function DropDownMenu({
    dropdownmenu1,
    dropdownmenu2,
    dropdownmenu3,
    dropdownmenu4,
    dropmenu1Link,
    dropmenu2Link,
    dropmenu3Link,
    dropmenu4Link
}) {
    const [dropdownmenu, setDropDownMenu]= useState(false)
    return (
        <div className="inline-flex bg-white border rounded-md mr-8">
          

            <div className="relative">
                <button onClick={()=> !dropdownmenu ? setDropDownMenu(true) : setDropDownMenu(false)}
                    type="button"
                    className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
               
               { dropdownmenu ? 

                <div className="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                    <div className="p-2">
                        <Link 
                        to={dropmenu1Link}
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            {dropdownmenu1}
                        </Link>
                        <Link 
                             to={dropmenu2Link}
                            
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            {dropdownmenu2}
                        </Link>
                        <Link 
                            to={dropmenu3Link}
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            {dropdownmenu3}
                        </Link>
                        <Link 
                            to={dropmenu4Link}
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            {dropdownmenu4}
                        </Link>
                    </div>
                </div>
                
                : null
                
                }
            
            
            </div>
        </div>
    );
}