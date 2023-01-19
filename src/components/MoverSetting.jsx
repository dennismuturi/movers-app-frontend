import { useParams } from "react-router-dom";
import { useState } from "react";
export default function MoverSetting  () {
    let {id} = useParams()
    const [updateMover, setUpdatedMover] =useState({

     password:""
  
    });
  
  
    const [message, setMessage] =useState("");
    const [isClicked, setClick] =useState(false);
   
    function handleSubmit(e){
        e.preventDefault();
      
        const requestOptions = {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(updateMover.password)
          };
          fetch(`http://localhost:3000/movers/${id}`, requestOptions)
              .then(response => response.json())
              .then(data => setMessage("Password changed"));
            
            }
  
    return (
        <div class="flex flex-col justify-center items-center">

        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
          
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Update Password</h2>
            </div>
            
            <form className="mt-8 space-y-6"  onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                
  
             {message  ? 
              <div className="flex items-center justify-between bg-green-200 p-6">
                <div className="flex items-center">
               {message}
                </div>
  
                <div className="text-sm">
                  <button onClick={()=>{
                    setClick(true);
                    setMessage("");
                  }}>X</button>
                </div>
              </div>
               
               :null
             }  
  

                <div>
                  <label  htmlFor="vehicle-name"  className="sr-only">
                    Update your password
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
                    placeholder="Change password"
  
                    onChange={((e)=> setUpdatedMover({...updateMover, password: e.target.value}))}
  
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
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
    
  
  </div>
    );

}