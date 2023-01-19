import { HomePage } from "./components";

import { Routes, Route} from 'react-router-dom';
import MoverPage from "./components/MoverPage";
import Vehicle from "./components/Vehicle";
import MoverSetting from "./components/MoverSetting";
import MoverCustomers from "./components/MoverCustomers";
import SignupForm from "./components/Signup";
import LoginForm from "./components/LoginPage";
import Checkout from "./components/CheckOut";

function App() {
  return (
    <>
  <Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/signup" element={<SignupForm/>}/>
    <Route path="/login" element={<LoginForm/>}/>
    <Route path="/checkout" element={<confirm_OrderForm/>}/>

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
