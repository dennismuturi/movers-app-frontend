import { HomePage } from "./components";

import { Routes, Route} from 'react-router-dom';
import MoverPage from "./components/MoverPage";
import Vehicle from "./components/Vehicle";
function App() {
  return (
    <>
  <Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/mover/:id" element={<MoverPage/>}>
    <Route path="vehicle" element={<Vehicle />}/>
  </Route>
  </Routes>
   </>
  );
}

export default App;
