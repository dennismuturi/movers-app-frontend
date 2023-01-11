import Tabs from "./Tabs";
export default function Header(){
    return (
        <div className="bg-black text-white flex">
        <div className=" w-1/2 p-10">
          <h1 className="text-5xl tracking-tight font-semibold">Let's move you<br/> safely</h1>
        <h1 className="mt-5 text-gray-200">
          Find the best movers, to get you and
          your belongings to your new destination minutes.   
        </h1>
      <button className="bg-gray-300 text-gray-900 py-2 px-5 mt-5">Get started </button>
      <Tabs/>
        </div>
        <div className="w-1/2">
          <img 
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_2068,h_1163/v1586184518/assets/ef/95d634-7cb9-4b27-8de0-79c9680c7077/original/City-4_5.jpg" 
          alt="A Imange of a City"
          className="py-10 px-10"/>
        </div>
        
      </div>
    );
}