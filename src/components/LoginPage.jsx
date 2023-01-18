import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
function LoginForm() {
const navigate = useNavigate();
const [error,setErrors]=useState([])
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
console.log(error)
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch('/customer_login',{
        method: 'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(formData)
    })
    .then(r=>{
        if(r.ok){
            r.json().then((customer)=>{
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
  };

  return (
    <div className='flex flex-row m-auto justify-center pt-10 h-screen bg-teal-300'>
    <div className=''>
       < img src="https://thumbs.dreamstime.com/b/movers-unloading-furniture-truck-young-male-cardboard-boxes-street-77511949.jpg" alt="mover"/>
    </div>
    <div className='items-center  '>
        <h1 className='text-center lg:text-3xl text-indigo-600 '>Sign In</h1>
    <p className='text-center pt-6'>Or <Link className='text-indigo-600 text-sm' to="/signup">Register here</Link></p>
    <form className="border rounded mt-10 bg-white p-6 rounded" onSubmit={handleSubmit}>
      <label className="block font-medium text-left mb-2 text-sm mb-2">
        Username:
        <input
          className="border rounded-lg py-2 mt-3 px-3 w-full"
          type="text"
          name="username"
          value={formData.username}
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
      <div className='lg:flex flex-row justify-center'>
      <button className="bg-indigo-500 text-white rounded-lg py-2 px-3" type="submit">Sign In</button>
      </div>
    </form>
    </div>
    </div>
    
    
  );
}

export default LoginForm;