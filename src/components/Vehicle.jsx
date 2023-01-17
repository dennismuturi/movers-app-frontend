import { useState } from "react";
import { useParams } from "react-router-dom";
export default function Vehicle () {

  let {id} = useParams()
  const [vehicle, setVehicle] =useState({

    vehicle_name: "",
    vehicle_type: "",
    vehicle_color: "",
    vehicle_number: "",
    mover_id: parseInt(id)

  });


  const [message, setMessage] =useState("");

 



  function handleSubmit(e){
  e.preventDefault();

  const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(vehicle)
    };
    fetch(`http://localhost:3000/vehicles`, requestOptions)
        .then(response => response.json())
        .then(data => setMessage("Successfully added to Vehicle"));
      
      }
  
  
    return (
<div class="flex flex-col justify-center items-center">

      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
        
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add Vehicles To Your Collection</h2>
            {message ? message : null}
          </div>
          <form className="mt-8 space-y-6"  onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label  htmlFor="vehicle-name"  className="sr-only">
                  Vehicle Name
                </label>
                <input
                  id="vehicle_name"
                  name="vehicle_name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Vehicle Name"

                  onChange={((e)=> setVehicle({...vehicle, vehicle_name: e.target.value}))}

                />
              </div>

              <div>
                <label   htmlFor="vehicle-type"  className="sr-only">
                  Vehicle Type
                </label>
                <input
                  id="vehicle_type"
                  name="vehicle_type"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Vehicle Type"

                  onChange={((e)=> setVehicle({...vehicle, vehicle_type: e.target.value}))}
                />
              </div>

              <div>
                <label   htmlFor="vehicle-number" className="sr-only">
                  Vehicle Number Plate
                </label>
                <input
                  id="vehicle_number"
                  name="vehicle_number"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Vehicle Number Plate"

                   onChange={((e)=> setVehicle({...vehicle, vehicle_number: e.target.value}))}
                />
              </div>

              <div>
                <label  htmlFor="vehicle-color" className="sr-only">
                  Vehicle Color
                  </label>
                <input
                  id="vehicle_color"
                  name="vehicle_coloe"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Vehicle Color"

                  onChange={((e)=> setVehicle({...vehicle, vehicle_color: e.target.value}))}
                />
              </div>
          
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  
                </span>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
  

</div>
    );
}