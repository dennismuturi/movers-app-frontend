import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function MoverSignup() {
    const[errors, setErrors]=useState([])
    const nav=useNavigate()
    console.log(errors)
  const [formData, setFormData] = useState({
    company_name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
//   const error=errors.join('').includes("Password confirmation doesn't match Password")

  const handleSubmit = event => {
    event.preventDefault();
    setErrors([])
    fetch('/signup_mover',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
    })
    .then(r=>{
        if(r.ok){
            r.json().then(mover=>{
                nav('/login')
                console.log(mover)
            })
        }
        else{
            r.json().then((err)=>setErrors(err.error))
        }
    })
    
  };
  const error=errors.join('')


  return(
    <div className='items-center pt-10 lg:w-full md  '>
        <h1 className='text-center lg:text-3xl text-indigo-600 '>Create a Mover Account</h1>
        <p className='text-center text-sm'>Or Login<Link className='text-indigo-600 pl-3' to="/login">here</Link></p>
    <form className="border rounded mt-10 bg-gray-300 p-6 rounded-lg lg:w-1/4 md:w-1/2 sm:w-full m-auto" onSubmit={handleSubmit}>
      <label className="block font-medium text-center mb-2 text-sm mb-2">
        Company Name:
        <input
          className="border rounded-lg py-2 mt-3 px-3 w-full"
          type="text"
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="block font-medium text-left mb-2 text-sm mb-2">
        Email:
        <input
          className="border rounded-lg py-2 px-3 w-full"
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
      <br />
      <label className="block font-medium text-left mb-2 text-sm mb-2">
        Confirm Password:
        <input
          className="border rounded-lg py-2 px-3 w-full"
          type="password"
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleChange}
        />
      </label>
    {error.includes==="Password"?(<p className='text-red-600 text-center italic'>The password doesn't match or Too short, try again</p>):(null)}
      <br />
      <div className='lg:flex flex-row justify-center'>
      <button className="bg-indigo-500 text-white rounded-lg py-2 px-3" type="submit">Sign Up</button>
      </div>
    </form>
    </div>
  );

}

export default MoverSignup;