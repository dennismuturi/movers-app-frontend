import { HomePage } from "./components";

import { Routes, Route} from 'react-router-dom';
import MoverPage from "./components/MoverPage";
import Vehicle from "./components/Vehicle";
import MoverSetting from "./components/MoverSetting";
import MoverCustomers from "./components/MoverCustomers";
import SignupForm from "./components/Signup";
import LoginForm from "./components/LoginPage";
import MoverSignup from "./components/MoverSignup";
import UserContext from "./components/context/UserContext";
import UserLogin from "./components/UserLogin";
import { useEffect, useState } from "react";

function App() {
  const [movers, setMovers] =useState([]);

  useEffect(()=>{
     fetch('http://localhost:3000/movers')
     .then((res)=> res.json())
     .then(data=> setMovers(data))
  },[])
  const [customer, setCustomer] = useState({
    id: '',
    name: '',
    email:'',
    password: '',
    phone_number: ''

  })

  const [mover, setMover] = useState({
    id: '',
    email:'',
    name: ''
  })


  const values = {
    customer,
    mover,
    setCustomer,
    setMover,
    movers
  }

  console.log(movers)

  return (
    <>
  <UserContext.Provider value={values}>
  <Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/signup" element={<SignupForm/>}/>
  <Route path="signup">
    <Route path="mover" element={<MoverSignup/>}/>
  </Route>
    <Route path="/login" element={<LoginForm/>}/>
    <Route path="/userlogin" element={<UserLogin/>}/>
    <Route path="/mover/:id" element={<MoverPage/>}>
    <Route path="vehicle" element={<Vehicle />}/>
    <Route path="settings" element={<MoverSetting/>} />
     <Route path="customers" element={<MoverCustomers />} />
  </Route>

 
  </Routes>
  </UserContext.Provider>
   </>
  );
}

export default App;
