import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function SignupForm() {
    const[errors, setErrors]=useState([])
    const nav=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
console.log(errors)
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const error=errors.join('').includes("Password confirmation doesn't match Password")

  const handleSubmit = event => {
    event.preventDefault();
    setErrors([])
    fetch('/signup_customer',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
    })
    .then(r=>{
        if(r.ok){
            r.json().then(customer=>{
                nav('/login')
                console.log(customer)
            })
        }
        else{
            r.json().then((err)=>setErrors(err.errors))
        }
    })
    
  };

  return(
    <div className='items-center pt-10 lg:w-full md  '>
        <h1 className='text-center lg:text-3xl text-indigo-600 '>Create a Customer Account</h1>
                <p className='text-center text-sm'>Or Login<Link className='text-indigo-600 pl-3' to="/login">here</Link></p>

        <p className='text-center text-md'>Or Regiter as a Mover<Link className='text-indigo-600 pl-2' to="/signup/mover">here</Link></p>
    <form className="border rounded mt-10 bg-gray-300 p-6 rounded-lg lg:w-1/4 md:w-1/2 sm:w-full m-auto" onSubmit={handleSubmit}>
      <label className="block font-medium text-center mb-2 text-sm mb-2">
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
        Name:
        <input
          className="border rounded-lg py-2 px-3 w-full"
          type="text"
          name="name"
          value={formData.name}
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
    {error?(<p className='text-red-600 text-center italic'>The password doesn't match, try again</p>):(null)}
      <br />
      <div className='lg:flex flex-row justify-center'>
      <button className="bg-indigo-500 text-white rounded-lg py-2 px-3" type="submit">Sign Up</button>
      </div>
    </form>
    </div>
  );

}

export default SignupForm;