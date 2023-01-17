import { HomePage } from "./components";

import { Routes, Route} from 'react-router-dom';
import MoverPage from "./components/MoverPage";
import Vehicle from "./components/Vehicle";
import MoverSetting from "./components/MoverSetting";
import MoverCustomers from "./components/MoverCustomers";

function App() {
  return (
    <>
  <Routes>
  <Route path="/" element={<HomePage/>}/>
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
