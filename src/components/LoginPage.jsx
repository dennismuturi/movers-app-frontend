import React, { useState } from 'react';
import {Link, useNavigate,Navigate, Route} from 'react-router-dom'
import { Checkbox } from "@material-tailwind/react";
import { useContext } from 'react';
import UserContext from './context/UserContext';
import MoverPage from './MoverPage';

function LoginForm() {

  const {customer, mover, setCustomer, setMover} = useContext(UserContext)
  console.log(customer)

  const [currentMover, setCurrentMover] = useState({
    id:null
  });

const[checkbox, setCheckbox]=useState(false);
const navigate = useNavigate();
const [error,setErrors]=useState([])
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
console.log(`formData`)
console.log(formData)
console.log(error)
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if(checkbox){
         fetch('http://localhost:3000/moverlogin',{
        method: 'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(formData)
    })
    .then(r=>{
        if(r.ok){
            r.json().then((mover)=>{
              setMover({
                id: mover.id,
                name : mover.company_name,
                email:  mover.email,

              })
                console.log(customer)
                console.log(mover.id)
                navigate(`/mover/${parseInt(mover.id)}`);
                

            })
        }
        else{
            r.json().then((error)=>{setErrors(error.error)
            })
        }
    })

    }
    else{

      fetch('http://localhost:3000/customerlogin',{
        method: 'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(formData)
    })
    .then(r=>{
        if(r.ok){
            r.json().then((customer)=>{
              setCustomer({
                id: customer.id,
                name : customer.name,
                email:  customer.email,
                phone_number : customer.phone_number

              })
                console.log(customer)
                navigate('/')

            })
        }
        else{
            r.json().then((error)=>{setErrors(error.error)
            })
        }
    })
    console.log(formData);
    }
    



  };

  return (
    
    <div className='flex justify-center m-auto h-screen mt-20'>
     
    {/* <div className=''>
       < img src="https://thumbs.dreamstime.com/b/movers-unloading-furniture-truck-young-male-cardboard-boxes-street-77511949.jpg" alt="mover"/>
    </div> */}
    <div className="w-1/4">

        <h1 className='text-center lg:text-3xl text-indigo-600 '>Sign In</h1>
    <p className='text-center pt-6'>Or <Link className='text-indigo-600 text-sm' to="/signup">Register here</Link></p>
   
    <form className="border w-full h-1/2 rounded-lg mt-10 bg-gray-300 p-6 rounded " onSubmit={handleSubmit}>
    {error}
      <label className="block font-medium text-left mb-2 text-sm mb-2">
        Email:
        <input
          className="border rounded-lg py-2 mt-3 px-3 w-full"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="block font-medium text-left mb-2 text-sm mb-2">
        Password:
        <input
          className="border rounded-lg py-2 px-3 w-full"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
     {error==="invalid email or password"? (<p className='text-center text-red-600 italic'>Invalid password or username</p>): null}
      <br />
      <div className="flex items-center">
              <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    onChange={() => setCheckbox(true)}
                    className="h-6 w-6   rounded border-gray-300 text-indigo-600 "
                  />
                <label
                    htmlFor="remember-me"
                    className="ml-2 block text-xl text-gray-900"
                  >
                    Mover? Tick here to login
                  </label>
            </div>
      <div className='flex flex-row justify-center'>
      <button className="bg-indigo-500 text-white rounded-lg py-2 px-3" type="submit">Sign In</button>
      </div>
  
    </form>
    </div>
    </div>
    
    
  );
}

export default LoginForm;