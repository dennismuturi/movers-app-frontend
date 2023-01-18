import { HomePage } from "./components";
import React,{useEffect, useState} from "react";
import { Routes, Route} from 'react-router-dom';
import MoverPage from "./components/MoverPage";
import Vehicle from "./components/Vehicle";
import MoverSetting from "./components/MoverSetting";
import MoverCustomers from "./components/MoverCustomers";
import SignupForm from "./components/Signup";
import LoginForm from "./components/LoginPage";
import MoverSignup from "./components/MoverSignup";

function App() {
  const[mover, setMover] = useState(null);
  const[customer, setCustomers] = useState(null);
  useEffect(()=>{
    fetch('/auto_login_mover')
    .then(res=>res.json())
    .then(data=>{
      setMover(data);
    })
      
  },[])
  console.log(mover);
  console.log(customer);

  useEffect(()=>{
    fetch('/auto_login_customer')  
    .then(res=>res.json())
    .then(data=>{
      setCustomers(data);
    })
  },[])

  return (
    <>
  <Routes>
  <Route path="/" element={<HomePage customer={customer} mover={mover}/>}/>
  <Route path="/signup" element={<SignupForm/>}/>
  <Route path="signup">
    <Route path="mover" element={<MoverSignup/>}/>
  </Route>
    <Route path="/login" element={<LoginForm setCustomers={setCustomers} setMover={setMover}/>}/>
    <Route path="/mover/:id" element={<MoverPage/>}>
    <Route path="vehicle" element={<Vehicle />}/>
    <Route path="settings" element={<MoverSetting/>} />
     <Route path="customers" element={<MoverCustomers />} />
  </Route>

  </Routes>
   </>
  );
}

export default App;
