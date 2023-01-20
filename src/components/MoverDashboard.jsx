import {Routes,Route, Link } from "react-router-dom";
import Vehicle from "./Vehicle";
export default function MoverDashboard ({mover}) {
  const gradientStyle ={
    background:  "linear-gradient(to right, #434343 0%, black 100%)",
    width: "200px",
     height: "200px"
}



    return (

      <>

<div className="mt-15 px-6  text-gray-300  MoverPage">

<div className="py-20 " >
        <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-2 text-white">

        {mover.company_name} </h2>
           <div className="flex flex-col gap-4">


<div  className="flex flex-col p-12 text-2xl font-bold " >
  My Orders : 


  <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                      Order ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Order Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Delivery Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        <Link to="cusomers" > Customer Names </Link>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Customer Emails
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              {mover.customer_orders ?
                             mover.customer_orders.map((order)=>{
                                return (
                           
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                                        {order.id}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-white whitespace-nowrap">
                                        {order.order_date}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-white whitespace-nowrap">
                                      {order.delivery_date}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <Link to=""
                                            className="text-green-500 hover:text-green-700"
                                          
                                        >
                                          {order.customer.name}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <Link to=""
                                            className="text-red-500 hover:text-red-700"
                                            
                                        >
                                            {order.customer.email}
                                        </Link>
                                    </td>
                                </tr>
                                );
                              })
                                
                               :null }
                             
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


</div>


<div className="flex flex-col p-12">

<div className=" flex justify-between">
<div class="text-2xl font-bold" >My Vehicles</div>
<button className="text-black text-sm bg-red-300 rounded-lg py-1 px-2">
  <Link to="vehicle">Add Vehicle </Link>
  </button>
</div>

<div className="container flex flex-row overflow-x-auto  gap-4 p-4">
  
{ mover.vehicles ?
  mover.vehicles.map((vehicle) => (
<div className="flex  justify-center " style={{width: "200px", height: "200px"}}
      key={vehicle.id} 
       >
  <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm text-white" 
  
  style={gradientStyle}
  >
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