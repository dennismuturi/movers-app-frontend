export default function Header(){
    return (
        <div className="bg-black 
        flex
        bg-[url('https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_2068,h_1163/v1586184518/assets/ef/95d634-7cb9-4b27-8de0-79c9680c7077/original/City-4_5.jpg')]
        p-24
        ">
<div className="container mx-auto px-6 ">
       

<div className="w-full max-w-xl h-max">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-max p-36">
    <div className="mb-4">
      <label class="block text-gray-700 font-bold mb-2 text-3xl py-12" for="customer">
        Request a Mover
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter PickUp Location"/>
    </div>
    <div className="mb-6 ">
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter Destination Location"/>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Request Now
      </button>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>

        </div>
        
      </div>
    );
}