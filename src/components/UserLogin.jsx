import { useState } from "react";
export default function UserLogin () {
    const [user, setUser] =useState({
        email:'',
        password: '',
    })

    const [message, setMessage] =useState("");
    const [isClicked, setClick] =useState(false);
   

    function handleSubmit(e){
        e.preventDefault();
      
        const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(user)
          };
          fetch(`http://localhost:3000/customerlogin`, requestOptions)
              .then(response => response.json())
              .then(data => setMessage("Successfully added to Vehicle"));
            
            }
        console.log(user)
    return (
        
      <div class="flex flex-col justify-center items-center">
      
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-md w-full space-y-8">
                <div>
              
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
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
                      <label  htmlFor="email"  className="sr-only">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="appearance-none rounded-none relative block
                        w-full px-3 py-2 border border-gray-300
                        placeholder-gray-500 text-gray-900 rounded-t-md
                        focus:outline-none focus:ring-indigo-500
                        focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email"
      
                        onChange={((e)=> setUser({...user, email: e.target.value}))}
      
                      />
                    </div>
      
                    <div>
                      <label   htmlFor="password"  className="sr-only">
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="appearance-none rounded-none relative block
                        w-full px-3 py-2 border border-gray-300
                        placeholder-gray-500 text-gray-900 rounded-t-md
                        focus:outline-none focus:ring-indigo-500
                        focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"

                        onChange={((e)=> setUser({...user, password: e.target.value}))}
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
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
        
    </div> );
}