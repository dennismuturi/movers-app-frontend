import {Routes,Route, Link } from "react-router-dom";
import Vehicle from "./Vehicle";
export default function MoverDashboard ({mover}) {
  const gradientStyle ={
    background:  "linear-gradient(to right, #434343 0%, black 100%)"
}

let moverId= mover.id;
    return (

      <>

<div className="mt-15 px-6  text-gray-300  MoverPage">

<div className="py-20 " >
        <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-2 text-white">

        {mover.company_name} </h2>
           <div className="grid grid-cols-2 gap-4">


<div  className="flex flex-col p-12 text-2xl font-bold " >My Orders</div>

<div className="flex flex-col p-12">

<div className=" flex justify-between">
<div class="text-2xl font-bold" >My Vehicles</div>
<button className="text-black text-sm bg-red-300 rounded-lg py-1 px-2">
  <Link to="vehicle">Add Vehicle </Link>
  </button>
</div>

<div className="container grid grid-cols-2 gap-4 p-6">
  
{ mover.vehicles ?
  mover.vehicles.map((vehicle) => (
<div className="flex justify-center "  
      key={mover.id} 
       >
  <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm text-white" style={gradientStyle}>
    <h5 className=" text-xl leading-tight font-medium mb-2">{vehicle.vehicle_name}</h5>
    <p className=" text-base mb-4">
      {vehicle.vehicle_number}
    </p>
    <p className="text-base mb-4">
      {vehicle.vehicle_type}
    </p>

   
  </div>
</div>

  ))

: null}



</div>

</div>

</div>
       
</div>    

</div>
</div>

  

</>
          
    );
}